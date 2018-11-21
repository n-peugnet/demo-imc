<?php $this->layout('layout', ['title' => 'Accueil']) ?>

<?php $this->start('js') ?>
	<script src="<?= $this->assetUrl("js/image-map-creator.bundle.js") ?>""></script>
	<!-- <script src="http://virtualhost/image-map-creator/dist/image-map-creator.bundle.js"></script> -->
	<script src="<?= $this->assetUrl("js/mustache.min.js") ?>""></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js"></script>
	<script src=<?= $this->assetUrl("js/script.js") ?> defer></script>
<?php $this->stop('js') ?>

<?php $this->start('main_content') ?>
	<div id="div-1" style="position: relative;"></div>

	<form
		action="<?= $this->url('api-insert-maps') ?>"
		method="post"
		onsubmit="submitForm(this, event)"
		enctype="multipart/form-data"
	>
		<label class="text">
			pseudo
			<input
				type="text"
				name="pseudo"
				value="anonymous"
				placeholder="anonymous"
				minlength="2"
				maxlength="32"
				required
			/>
		</label>
		<input type="submit" value="publish"/>
	</form>

	<h2>Recently published maps:</h2>
	<ul id="maps"></ul>

	<script type="text/javascript">
		let iMap = new imageMapCreator(700, 555);
		let sketch = new p5(iMap.sketch.bind(iMap), "div-1");

		let urls = {
			api: '<?= $this->url('api-list-maps') ?>',
			template: '<?= $this->assetUrl('templates/view.map.mustache') ?>',
		}
	</script>
<?php $this->stop('main_content') ?>
