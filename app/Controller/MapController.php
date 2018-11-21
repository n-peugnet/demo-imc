<?php

namespace Controller;

use RuntimeException;
use \Controller\FileController;
use \Model\MapModel;

class MapController extends FileController
{
	public function list()
	{
		$maps = new MapModel();
		$data = $maps->getPage(1, 10);
		$data = array_map(function ($row) {
			$row['image'] = $this->assetUrl($row['image']);
			return $row;
		}, $data);
		$this->showJson($data);
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
				"error" => false,
				"message" => "File uploaded successfully"
			);
			$this->showJson($response);

		} catch (\Exception $e) {
			$response = array(
				"status" => "error",
				"error" => true,
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