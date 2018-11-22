<?php

namespace Controller;

use RuntimeException;
use \Model\MapModel;
use DateTimeZone;

class MapController extends ImageController
{
	protected $items = 10;
	protected $maxMaps = 2000;

	public function list($page = 1)
	{
		$maps = new MapModel();
		$nbPages = $maps->nbPages($this->items);

		$data = $maps->getPage($page, $this->items);
		$data = array_map(function ($row) {
			$date = new \DateTime($row['date'], new DateTimeZone('UTC'));
			$row['date'] = $date->format('Y-m-d H:i:s e');
			$row['image'] = $this->assetUrl($row['image']);
			return $row;
		}, $data);
		$response = array(
			"status" => "success",
			"message" => "Successfully retrieved maps of page $page",
			'remaining' => $nbPages > $page,
			'maps' => $data,
			'page' => $page,
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
				"message" => "File uploaded successfully"
			);
			$this->showJson($response);

		} catch (\Exception $e) {
			$response = array(
				"status" => "error",
				"message" => $e->getMessage()
			);
			http_response_code($e->getCode());
			$this->showJson($response);
		}
	}

}