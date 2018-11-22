<?php

namespace Controller;

use RuntimeException;
use \Model\MapModel;

class MapController extends ImageController
{
	protected $maxMaps = 2000;

	public function read($id)
	{
		$maps = new MapModel();
		if (false !== $map = $maps->find($id, $this->assetUrl(''))) {
			$response = array(
				"status" => "success",
				"message" => "Successfully retrieved map $id",
				"map" => $map,
			);
		} else {
			$response = array(
				"status" => "error",
				"message" => "Map $id does not exist",
			);
		}
		$this->showJson($response);
	}

	public function list($from = 0, $number = 10)
	{
		$maps = new MapModel();
		$min = $maps->min();
		if ($from < 1) {
			$from = $maps->max();
		}
		$data = $maps->list($from, $number, $this->assetUrl(''));
		$remaining = $data[count($data) - 1]['id'] > $min;
		$response = array(
			"status" => "success",
			"message" => "Successfully retrieved $number maps from $from",
			'remaining' => $remaining,
			'maps' => $data,
		);
		$this->showJson($response);
	}

	public function insert()
	{
		try {
			$data = $this->extractData('POST', [
				'pseudo',
				'json',
			]);
			$this->checkJson($data['json']);
			$path = $this->fileCheck();
			$size = $this->fileSize();
			$ext = $this->fileExt($path);
			$scale = $this->autoResize($path, $ext);
			$path = $this->fileSave($path, $ext);

			$maps = new MapModel();
			$data['image'] = $path;
			$data['scale'] = $scale;
			$data['date'] = gmdate('Y-m-d H:i:s');
			$maps->insert($data);

			$response = array(
				"status" => "success",
				"message" => "File uploaded successfully",
			);
			$this->showJson($response);

		} catch (\Exception $e) {
			$response = array(
				"status" => "error",
				"message" => $e->getMessage(),
			);
			http_response_code($e->getCode());
			$this->showJson($response);
		}
	}

}