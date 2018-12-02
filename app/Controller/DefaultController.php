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
		$last = $maps->findLast($this->assetUrl(''));
		$this->show('default/home', ['lastMap' => $last]);
	}

}