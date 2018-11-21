// import { ImageMap } from "./image-map-creator.bundle.1.js";

window.onload = async () => {

	const template = await fetch(urls.template)
		.then(response => response.text());

	const imageMap = new imageMapCreator().map;
	const listElm = document.querySelector('#maps');
	const html = document.querySelector('html');
	let page = 1;

	// Initially load some items.
	let remaining = await loadMapPage(template, imageMap, listElm, page);
	if (remaining) page++;

	// Detect when scrolled to bottom.
	document.addEventListener('scroll', async () => {
		console.log('ça scroll par içi');
		if (html.scrollTop + html.clientHeight >= html.scrollHeight) {
			console.log('arrivé en bas');
			if (remaining) {
				console.log('chargement de nouveaux éléments');
				remaining = await loadMapPage(template, imageMap, listElm, page);
				if (remaining) page++;
			}
		}
	});
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {Event} e 
 */
function submitForm(form, e) {
	console.log({ form, e });
	e.preventDefault();

	const data = new FormData(form);
	data.append('json', iMap.exportMap());
	data.append('upfile', iMap.img.file);

	const request = new Request(form.action, {
		method: 'POST',
		body: data
	});

	fetch(request)
		.then(response => response.json())
		.then(console.log)
}

async function loadMapPage(template, imageMap, list, page = 1) {
	const url = `${urls.api}/${page}`;
	return await fetch(url)
		.then(response => response.json())
		.then(response => {
			if (response.status != 'success') throw new Error(response.message);
			return response;
		})
		.then(response => {
			let html = "";
			for (const map of response.maps) {
				let data = JSON.parse(map.json).map;
				map.name = data.name
				map.imageId = map.image.split('/').pop().split('.').shift() + map.id;
				data.name = map.imageId;
				imageMap.setFromObject(data);
				map.html = imageMap.toHtml();
				html += Mustache.render(template, map)
			}
			list.insertAdjacentHTML('beforeend', html);
			return response.remaining;
		})
		.catch(console.warn);
}