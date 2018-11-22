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
		$lastLoaded = $maps->max() + 1;
		$this->show('default/home', ['maxMapId' => $lastLoaded]);
	}

}