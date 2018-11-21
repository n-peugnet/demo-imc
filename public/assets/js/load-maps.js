window.onload = async () => {

	const template = await fetch(urls.template)
		.then(response => response.text());

	fetch(urls.api)
		.then(response => response.json())
		.then(array => {
			let html = "";
			for (const map of array) {
				map.imageId = map.image.split('/').pop();
				html += Mustache.render(template, map)
			}
			return html;
		})
		.then(html => document.getElementById('maps').insertAdjacentHTML('beforeend', html));
}