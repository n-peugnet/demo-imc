<?php $this->layout('layout', ['title' => 'Accueil']) ?>

<?php $this->start('js') ?>
	<script src=<?= $this->assetUrl("js/image-map-creator.bundle.js") ?>></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js"></script>
<?php $this->stop('js') ?>

<?php $this->start('main_content') ?>
	<div id="div-1" style="position: relative;"></div>

	<script type="text/javascript">
		let iMap = new imageMapCreator(700, 555);
		let sketch = new p5(iMap.sketch.bind(iMap), "div-1");
	</script>
<?php $this->stop('main_content') ?>
