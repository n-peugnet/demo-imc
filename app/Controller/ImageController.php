<?php

namespace Controller;

use \RuntimeException;

class ImageController extends FileController
{
	private $maxWidth = 800;

	/**
	 * Auto resize an image based on its width then returns its new scale
	 * @param string $filename path of the image
	 * @param string $ext type of the image
	 * @return float scale of the image
	 * @throws RuntimeException
	 */
	public function autoResize($filename, $ext)
	{
		$scale = 1;
		
		// Calcul des nouvelles dimensions
		list($width, $height) = getimagesize($filename);
		$newScale = $this->maxWidth / $width;

		if ($scale < $newScale) {
			return $scale;
		}

		switch ($ext) {
			case 'jpg':
				$image = imagecreatefromjpeg($filename);
				imagejpeg(imagescale($image, $this->maxWidth), $filename);
				break;
			case 'png':
				$image = imagecreatefrompng($filename);
				imagepng(imagescale($image, $this->maxWidth), $filename);
				break;
			case 'gif':
				$image = imagecreatefromgif($filename);
				imagegif(imagescale($image, $this->maxWidth), $filename);
				break;
			case 'bmp':
				$image = imagecreatefrombmp($filename);
				imagebmp(imagescale($image, $this->maxWidth), $filename);
				break;
			default:
				throw new RuntimeException("Invalid image format. ($ext)", 400);
				break;
		}
		return $newScale;
	}
}