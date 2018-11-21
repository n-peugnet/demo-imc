<?php

namespace Controller;

use RuntimeException;
/**
 * intermediate parent class just in case...
 */
class Controller extends \W\Controller\Controller
{
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
		$input = "_$method";
		$data = [];
		foreach ($params as $param) {
			if (!isset($$input[$param])) {
				if (!$optionnal) {
					throw new RuntimeException("Invalid parameters. Undefined parameter: $param.", 400);
				} else {
					$data[$param] = null;
				}
			} else {
				$data[$param] = $$input[$param];
			}
		}
		return $data;
	}
}