<?php

namespace Controller;

use RuntimeException;
use \Model\MapModel;

class FileController extends Controller
{
	/**
	 * Check if a file has been correctly uploaded and return its path
	 * @return string tmp path of the uploaded file
	 * @throws RuntimeException
	 */
	protected function fileCheck()
	{
		// Undefined | Multiple Files | $_FILES Corruption Attack
		// If this request falls under any of them, treat it invalid.
		if (!isset($_FILES['upfile']['error']) ||
			is_array($_FILES['upfile']['error'])) {
			throw new RuntimeException('Invalid parameters.', 400);
		}

		// Check $_FILES['upfile']['error'] value.
		switch ($_FILES['upfile']['error']) {
			case UPLOAD_ERR_OK:
				break;
			case UPLOAD_ERR_NO_FILE:
				throw new RuntimeException('No file sent.', 400);
			case UPLOAD_ERR_INI_SIZE:
			case UPLOAD_ERR_FORM_SIZE:
				throw new RuntimeException('Exceeded filesize limit.', 400);
			default:
				throw new RuntimeException('Unknown errors.', 500);
		}
		return $_FILES['upfile']['tmp_name'];
	}


	/**
	 * check the size of an uploaded file
	 * @return int size of the file
	 * @throws RuntimeException
	 */
	protected function fileSize()
	{
		if (2000000 < $size = $_FILES['upfile']['size']) {
			throw new RuntimeException('Exceeded filesize limit.', 400);
		}
		return $size;
	}

	/**
	 * Check the type of an uploaded file
	 * @return string extension of the file
	 * @throws RuntimeException
	 */
	protected function fileExt($path)
	{
		// DO NOT TRUST $_FILES['upfile']['mime'] VALUE !!
		// Check MIME Type.
		$mimes = array(
			'image/jpeg' => 'jpg',
			'image/png' => 'png',
			'image/gif' => 'gif',
			'image/bmp' => 'bmp',
			'image/x-ms-bmp' => 'bmp',
			'image/x-windows-bmp' => 'bmp',
		);
		$finfo = new \finfo(FILEINFO_MIME_TYPE);
		$mime = $finfo->file($path);
		$ext = array_key_exists($mime, $mimes) ? $mimes[$mime] : false;
		if ($ext === false) {
			throw new RuntimeException("Invalid file format. ($mime)", 400);
		}
		return $ext;
	}

	/**
	 * Rename and save the file in uploads dir
	 * @param string $tmpPath current path of the file before save
	 * @param string $ext custom ext of the file
	 * @return string the new path
	 * @throws RuntimeException
	 */
	protected function fileSave($tmpPath, $ext)
	{
		// You should name it uniquely.
		// DO NOT USE $_FILES['upfile']['name'] WITHOUT ANY VALIDATION !!
		// On this example, obtain safe unique name from its binary data.
		$newPath = sprintf(
			'uploads/%s.%s',
			sha1_file($tmpPath),
			$ext
		);
		if (!move_uploaded_file(
			$tmpPath,
			"./assets/$newPath"
		)) {
			throw new RuntimeException('Failed to move uploaded file.');
		}
		return $newPath;
	}

}