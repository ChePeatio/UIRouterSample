'use strict';

angular.module('appServices', []);

angular.module('appControllers', ['appServices']);

var app = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
    'appServices',
    'appControllers'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("main", {
        abstract: true,
        url: "/main",
        templateUrl: "main/main.html",
        controller: "mainCtrl"
    }).state("main.home", {
        url: "/home",
        templateUrl: "home/home.html",
        controller: "homeCtrl"
    }).state("main.jobs", {
        url: "/jobs",
        templateUrl: "jobs/jobs.html",
        controller: "jobsCtrl"
    }).state("main.jobs.details", {
        url: "/details/:id",
        templateUrl:"",

    })
});

/*
// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ui.router',
    'ui.bootstrap',
    'appControllers'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main/tab1");
    $stateProvider.state("main", {
        abstract: true,
        url: "/main",
        templateUrl: "tabs/main.html"
    }).state("main.tab1", {
        url: "/tab1",
        templateUrl: "tabs/tab1.html",
        controller: "tab1Controller"
    }).state("main.tab1.tg1", {
        url: "/tg1",
        templateUrl: "view1/view1.html"
    }).state("main.tab1.tg2", {
        url: "/tg2",
        templateUrl: "view2/view2.html"
    }).state("main.tab1.tg3", {
        url: "/tg3",
        templateUrl: "view1/view1.html"
    }).state("main.tab2", {
        url: "/tab2",
        templateUrl: "tabs/tab2.html"
    }).state("main.tab3", {
        url: "/tab3",
        templateUrl: "tabs/tab3.html"
    });
});*/