/**
 * Created by CheKedar on 2016/7/29.
 */
'use strict';

var appController = angular.module("appControllers");

appController.controller("jobsCtrl", ["$scope", "$stateParams", "jobSet",
    function ($scope, $stateParams, jobSet) {
        $scope.jobDescription = $stateParams.id;
    }
]);