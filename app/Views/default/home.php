<?php $this->layout('layout', ['title' => 'Image-map Creator']) ?>

<?php $this->start('js') ?>
	<script src="<?= $this->assetUrl("js/image-map-creator/dist/image-map-creator.bundle.js") ?>""></script>
	<script src="<?= $this->assetUrl("js/mustache.min.js") ?>""></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js"></script>
	<script src=<?= $this->assetUrl("js/script.js") ?> defer></script>
<?php $this->stop('js') ?>

<?php $this->start('main_content') ?>
	<div id="div-1" style="position: relative;"></div>

	<iframe src="https://ghbtns.com/github-btn.html?user=n-peugnet&repo=image-map-creator&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
	<form
		action="<?= $this->url('api_insert_maps') ?>"
		method="post"
		id="publish-form"
		enctype="multipart/form-data"
	>
		<label class="text">
			pseudo
			<input
				type="text"
				name="pseudo"
				placeholder="anonymous"
				minlength="2"
				maxlength="32"
				required
			/>
		</label>
		<input type="submit" value="publish" id="publish-form-submit"/>
		<img class="info hidden loading" src="<?= $this->assetUrl('img/loading.gif') ?>">
		<img class="info hidden success" src="<?= $this->assetUrl('img/success.svg') ?>">
		<img class="info hidden error" src="<?= $this->assetUrl('img/error.svg') ?>">
	</form>

	<h2>Recently published maps:</h2>
	<ul id="maps"></ul>

	<script type="text/javascript">
		let iMap = new imageMapCreator(700, 555);
		let sketch = new p5(iMap.sketch.bind(iMap), "div-1");

		// Globals for loading script
		let urls = {
			api: '<?= $this->url('api_list_maps') ?>',
			template: '<?= $this->assetUrl('templates/view.map.mustache') ?>',
		}
		let loaded = {
			first: <?= $maxMapId ?>,
			next: <?= $maxMapId ?>,
			remaining: <?= $maxMapId > 0 ?>,
		}
	</script>
<?php $this->stop('main_content') ?>
