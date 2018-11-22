// import { ImageMap } from "./image-map-creator.bundle.1.js";

window.onload = async () => {

	const template = await fetch(urls.template)
		.then(response => response.text());

	const imageMap = new imageMapCreator().map;
	const list = document.querySelector('#maps');
	const html = document.querySelector('html');
	// loaded var comes from home view

	// form onsubmit event
	document.querySelector('#publish-form').addEventListener('submit', function (e) {
		e.preventDefault();
		let image;
		let json;
		try {
			image = getImage(iMap);
			json = getJson(iMap);
		} catch (error) {
			alert(error.message);
			return false;
		}

		const data = new FormData(this);
		data.append('upfile', image);
		data.append('json', json);

		const request = new Request(this.action, {
			method: 'POST',
			body: data
		});

		fetch(request)
			.then(handleErrors)
			.then(response => {
				let id = response.insertId + 1;
				loaded.first = id;
				return loadMaps({
					last: id,
					first: loaded.first,
				}, id - loaded.first)
			})
			.then(html => {
				list.insertAdjacentHTML('afterbegin', html);
				location.hash = "#maps";
			})
			.catch(console.warn);
	})

	// Initially load some items.
	await loadMaps(loaded)
		.then(html => list.insertAdjacentHTML('beforeend', html));

	// Detect when scrolled to bottom.
	document.addEventListener('scroll', async () => {
		console.log('ça scroll par içi');
		if (html.scrollTop + html.clientHeight >= html.scrollHeight) {
			console.log('arrivé en bas');
			if (loaded.remaining) {
				console.log('chargement de nouveaux éléments');
				loadMaps(loaded)
					.then(html => list.insertAdjacentHTML('beforeend', html));
			}
		}
	});

	async function loadMaps(loaded, number) {
		let url = `${urls.api}/${loaded.last - 1}`;
		url += number ? `/${number}` : '';
		return fetch(url)
			.then(handleErrors)
			.then(response => {
				if (response.status != 'success') throw new Error(response.message);
				return response;
			})
			.then(response => {
				let html = "";
				let maps = response.maps;
				for (const map of maps) {
					let data = map.json.map;
					map.name = data.name
					map.imageId = map.image.split('/').pop().split('.').shift() + map.id;
					data.name = map.imageId;
					imageMap.setFromObject(data);
					map.html = imageMap.toHtml(parseFloat(map.scale));
					html += Mustache.render(template, map)
				}
				let first = parseInt(maps[0].id);
				let last = parseInt(maps[maps.length - 1].id);
				if (first > loaded.first) {
					loaded.first = first;
				}
				if (last < loaded.last) {
					loaded.last = last;
				}
				loaded.remaining = response.remaining;
				return html;
			})
			.catch(console.warn);
	}
}

async function handleErrors(response) {
	if (!response.ok) {
		const data = await response.json();
		throw Error(`${response.statusText}. ${data.message}`);
	}
	return response.json();
}

function getJson(iMap) {
	if (iMap.map.isEmpty()) {
		throw new Error('Your map does not contain any area !');
	}
	return iMap.exportMap();
}

function getImage(iMap) {
	const image = iMap.img.file;
	if (!image) {
		throw new Error('Your map has no image !');
	}
	return image;
}