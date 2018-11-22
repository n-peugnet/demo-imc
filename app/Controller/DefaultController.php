<?php

namespace Controller;

use \Model\MapModel;

class DefaultController extends Controller
{

	/**
	 * Page d'accueil par défaut
	 */
	public function home()
	{
		$maps = new MapModel();
		$maxMapId = $maps->max();
		$this->show('default/home', ['maxMapId' => $maxMapId]);
	}

}