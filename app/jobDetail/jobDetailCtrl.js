/**
 * Created by CheKedar on 2016/7/29.
 */
'use strict';

var appController = angular.module("appControllers");

appController.controller("jobDetailCtrl", ["$scope", "$window", "jobSet",
    function ($scope, $window, jobSet) {
        $window.console.log("fire jobDetailCtrl");
        $scope.jobs = jobSet.get();
        
    }
]);