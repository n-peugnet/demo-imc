// import { ImageMap } from "./image-map-creator.bundle.1.js";

window.onload = async () => {

	const template = await fetch(urls.template)
		.then(response => response.text());

	const imageMap = new imageMapCreator().map;

	fetch(urls.api)
		.then(response => response.json())
		.then(array => {
			let html = "";
			for (const map of array) {
				let data = JSON.parse(map.json).map;
				map.name = data.name
				map.imageId = map.image.split('/').pop().split('.').shift() + map.id;
				data.name = map.imageId;
				imageMap.setFromObject(data);
				map.html = imageMap.toHtml();
				html += Mustache.render(template, map)
			}
			return html;
		})
		.then(html => document.getElementById('maps').insertAdjacentHTML('beforeend', html));
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