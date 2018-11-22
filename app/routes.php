<?php

$w_routes = array(
	['GET', '/', 'Default#home', 'home'],
	['GET', '/api/map/[i:id]', 'Map#read', 'api_read_map'],
	['POST', '/api/map', 'Map#insert', 'api_insert_maps'],
	['', '/api/maps', '', 'api_list_maps'], //inaccessible route to generate base api link
	['GET', '/api/maps/[i:from].[ASC|DESC:order]?', 'Map#listFrom', 'api_list_map_from'],
	['GET', '/api/maps/[i:from]-[i:to]', 'Map#listFromTo', 'api_list_map_from_to'],
);