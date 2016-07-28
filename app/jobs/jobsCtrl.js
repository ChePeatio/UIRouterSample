/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

var appController = angular.module("appControllers");

appController.controller("jobsCtrl", ["$scope", "jobSet",
    function ($scope, jobSet) {
        /*$scope.jobs = [
            {name: "test", router: "jobs.1", active: false},
            {name: "test1", router: "jobs.2", active: false}
        ];*/
        $scope.jobs = jobSet.get();
    }
]);