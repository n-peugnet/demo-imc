<?php

namespace Controller;

use RuntimeException;
use Locale;
/**
 * intermediate parent class just in case...
 */
class Controller extends \W\Controller\Controller
{
	protected $locale;

	public function __construct()
	{
		$this->setLocale();
	}

	/**
	 * Set the current user's locale in the iso format. (ex : 'fr_FR')
	 * @return string locale
	 */
	public function setLocale()
	{
		$this->locale = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
	}

	/**
	 * Extract params from the request
	 * @param string $method GET|POST
	 * @param string[] $params list of params to extract
	 * @param bool $optionnal false: throw error if param is not set
	 * @return string[] extracted data
	 * @throws RuntimeException
	 */
	protected function extractData($method, $params, $optionnal = false)
	{
		switch ($method) {
			case 'POST':
				$input = $_POST;
				break;
			case 'GET':
				$input = $_GET;
				break;
			default:
				throw new ErrorException("Method: $method cannot be used with this function.", 1);
				break;
		}
		$data = [];
		foreach ($params as $param) {
			if (!isset($input[$param])) {
				if (!$optionnal) {
					throw new RuntimeException("Invalid parameters. Undefined parameter: $param.", 400);
				} else {
					$data[$param] = null;
				}
			} else {
				$data[$param] = $input[$param];
			}
		}
		return $data;
	}
}