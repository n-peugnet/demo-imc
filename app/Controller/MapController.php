<?php

namespace Controller;

use RuntimeException;
use \Controller\FileController;
use \Model\MapModel;

class MapController extends FileController
{
	public function list($page = 1)
	{
		$items = 10;
		$maps = new MapModel();
		$nbPages = $maps->nbPages($items);

		$data = $maps->getPage($page, $items);
		$data = array_map(function ($row) {
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
			$path = $this->fileCheck();
			$size = $this->fileSize();
			$ext = $this->fileExt($path);
			$path = $this->fileSave($path, $ext);

			$maps = new MapModel();
			$data['image'] = $path;
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

	protected function resize($map)
	{
		# code...
		parent::resize($image);
	}

}