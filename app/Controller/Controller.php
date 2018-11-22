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

	/**
	 * Check a JSON string
	 * @param string $string JSON string to check
	 * @return true
	 * @throws RuntimeException
	 */
	protected function checkJson($string)
	{
		json_decode($string);
		switch (json_last_error()) {
			case JSON_ERROR_NONE:
				return true;
				break;
			case JSON_ERROR_DEPTH:
				throw new RuntimeException('[JSON] Maximum stack depth exceeded', 400);
				break;
			case JSON_ERROR_STATE_MISMATCH:
				throw new RuntimeException('[JSON] Underflow or the modes mismatch', 400);
				break;
			case JSON_ERROR_CTRL_CHAR:
				throw new RuntimeException('[JSON] Unexpected control character found', 400);
				break;
			case JSON_ERROR_SYNTAX:
				throw new RuntimeException('[JSON] Syntax error, malformed JSON', 400);
				break;
			case JSON_ERROR_UTF8:
				throw new RuntimeException('[JSON] Malformed UTF-8 characters, possibly incorrectly encoded', 400);
				break;
			default:
				throw new RuntimeException('[JSON] Unknown error', 400);
				break;
		}
	}
}