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
		if (!confirm('Do you really want to publish this map ?')) return false;
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
			.then(async response => {
				let id = parseInt(response.insertId);
				const html = await loadMaps({
					next: id,
					first: loaded.first,
				}, loaded.first);
				loaded.first = id;
				return { html, id };
			})
			.then(res => {
				console.log(res);
				list.insertAdjacentHTML('afterbegin', res.html);
				document.getElementById(`map-${res.id}`).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
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

	async function loadMaps(loaded, to) {
		let opt = to ? `-${to}` : '.DESC';
		let url = `${urls.api}/${loaded.next}${opt}`;
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
				let next = parseInt(maps[maps.length - 1].id) - 1;
				if (next < loaded.next) {
					loaded.next = next;
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