<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/about', 'Home::about');
$routes->get('/services', 'Home::services');
$routes->get('/portfolio', 'Home::portfolio');
$routes->get('/blogs', 'Home::blogs');
$routes->get('/contact', 'Home::contact');
