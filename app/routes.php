<?php

$w_routes = array(
	['GET', '/', 'Default#home', 'home'],
	['GET', '/api/maps', 'Map#list', 'api-list-maps'],
	['GET', '/api/maps/[i:page]', 'Map#list', 'api-list-maps-page'],
	['POST', '/api/maps', 'Map#insert', 'api-insert-maps'],
);