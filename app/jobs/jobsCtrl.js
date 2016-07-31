/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

var appController = angular.module("appControllers");

appController.controller("jobsCtrl", ["$scope", "$window", "$state", "jobSet", "jobConfig",
    function ($scope, $window, $state, jobSet, jobConfig) {
        /*$scope.jobs = [
         {name: "test", router: "jobs.1", active: false},
         {name: "test1", router: "jobs.2", active: false}
         ];*/
        $scope.jobs = jobSet.get();
        $window.console.log("hehe");

        $scope.jobSelect = function (index) {
            $window.console.log("jobSelect: " + index);
            $scope.activeJob = _.find($scope.jobs, function (job) {
                return job.index == index;
            });
//            jobConfig.set("jobActive", index);
//            $state.go("main.jobs.details");
        };
    }
]);