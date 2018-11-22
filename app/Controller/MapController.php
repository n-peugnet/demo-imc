<?php

namespace Controller;

use RuntimeException;
use \Model\MapModel;

class MapController extends ImageController
{
	protected $nbRows = 10;
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

	public function listFrom($from, $order = 'ASC')
	{
		$maps = new MapModel();
		$min = $maps->min();
		$data = $maps->listFrom($from, $order, $this->nbRows, $this->assetUrl(''));
		$remaining = ($nb = count($data)) > 0 ? $data[$nb - 1]['id'] > $min : false;
		$response = array(
			"status" => "success",
			"message" => "Successfully retrieved $nb maps from $from",
			'remaining' => $remaining,
			'maps' => $data,
		);
		$this->showJson($response);
	}

	public function listFromTo($from, $to)
	{
		$maps = new MapModel();
		$data = $maps->listFromTo($from, $to, $this->nbRows, $this->assetUrl(''));
		$nb = count($data);
		$response = array(
			"status" => "success",
			"message" => "Successfully retrieved $nb maps from $from to $to",
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
			$insertId = $maps->insert($data)['id'];

			$response = array(
				"status" => "success",
				"message" => "File uploaded successfully",
				"insertId" => $insertId,
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