<?php

$w_routes = array(
	['GET', '/', 'Default#home', 'home'],
	['GET', '/api/map/[i:id]', 'Map#read', 'api_read_map'],
	['POST', '/api/map', 'Map#insert', 'api_insert_maps'],
	['GET', '/api/maps', 'Map#list', 'api_list_maps'],
	['GET', '/api/maps/[i:first]', 'Map#list', 'api_list_map_from'],
	['GET', '/api/maps/[i:first]/[i:number]', 'Map#list', 'api_list_map_from_nb'],
);