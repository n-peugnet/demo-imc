<?php

$w_routes = array(
	['GET', '/', 'Default#home', 'home'],
	['GET', '/api/maps', 'Map#list', 'api-list-maps'],
	['POST', '/api/maps', 'Map#insert', 'api-insert-maps'],
);