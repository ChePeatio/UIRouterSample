/**
 * Created by CheKedar on 2016/7/29.
 */
'use strict';

var appController = angular.module("appControllers");

appController.controller("jobDetailCtrl", ["$scope", "$window", "jobSet", "jobConfig",
    function ($scope, $window, jobSet, jobConfig) {
        $window.console.log("fire jobDetailCtrl");
        $scope.jobs = jobSet.get();
        $scope.jobIndex = jobConfig.get("jobActive");
        $scope.activeJob = _.find($scope.jobs, function (job) {
            return job.index == $scope.jobIndex;
        });
        $window.console.log($scope.activeJob);
        //jobConfig.watch("jobActive", fun);
        //$scope.$on("$destory", jobConfig.unwatch("jobActive", fun));
    }
]);