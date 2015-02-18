'use strict';

var myApp = angular.module('DCWeb', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  	// For any unmatched url, redirect to /state1
  	$urlRouterProvider.otherwise('/');
  
  	// Now set up the states
  	$urlRouterProvider.when('', '/home');
  	$urlRouterProvider.when('/', '/home');
  	$urlRouterProvider.otherwise('/home'); 	
  	$stateProvider
    	.state('index', {
    		abstract: true,
      		url: '/',
      		templateUrl: 'DC_spine.html'
    	})
    	.state('index.home', {
    		url:'/home',
    		templateUrl: 'home.html'
    	})
    	.state('index.about', {
    		url: '/about',
    		templateUrl: 'about.html'
    	})
    	.state('index.projects', {
    		url: '/projects',
    		templateUrl: 'projects.html'
    	})
    	.state('index.hobbies', {
    		url: '/hobbies',
    		templateUrl: 'hobbies.html'
    	})
});