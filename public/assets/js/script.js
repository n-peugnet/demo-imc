// import { ImageMap } from "./image-map-creator.bundle.1.js";

window.onload = async () => {

	const template = await fetch(urls.template)
		.then(response => response.text());

	const imageMap = new imageMapCreator().map;
	const listElm = document.querySelector('#maps');
	const html = document.querySelector('html');

	// Initially load some items.
	let remaining = await loadMapPage(template, imageMap, listElm, loaded);

	// Detect when scrolled to bottom.
	document.addEventListener('scroll', async () => {
		console.log('ça scroll par içi');
		if (html.scrollTop + html.clientHeight >= html.scrollHeight) {
			console.log('arrivé en bas');
			if (remaining) {
				console.log('chargement de nouveaux éléments');
				remaining = await loadMapPage(template, imageMap, listElm, loaded);
			}
		}
	});
}

async function handleErrors(response) {
	if (!response.ok) {
		const data = await response.json();
		throw Error(`${response.statusText}. ${data.message}`);
	}
	return response.json();
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {Event} e 
 */
function submitForm(form, e) {
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

	const data = new FormData(form);
	data.append('upfile', image);
	data.append('json', json);

	const request = new Request(form.action, {
		method: 'POST',
		body: data
	});

	fetch(request)
		.then(handleErrors)
		.then(console.log)
		.catch(console.warn);
}

async function loadMapPage(template, imageMap, list, loaded) {
	const url = `${urls.api}/${loaded.last - 1}`;
	return await fetch(url)
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
			list.insertAdjacentHTML('beforeend', html);
			let first = parseInt(maps[0].id);
			let last = parseInt(maps[maps.length - 1].id);
			if (first > loaded.first) {
				loaded.first = first;
			}
			if (last < loaded.last) {
				loaded.last = last;
			}
			return response.remaining;
		})
		.catch(console.warn);
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