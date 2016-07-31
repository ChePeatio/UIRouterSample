/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

var appController = angular.module("appControllers");

appController.controller('homeCtrl', ["$scope", "$state", "$window", "jobSet",
    function ($scope, $state, $window, jobSet) {
        $scope.jobs = [
            {name: "job1", instance:"Version", type: "ComboBox", list: ["aa", "bbb", "cccc"], description: "job1 is an easy job!"},
            {name: "job2", instance:"Comment", type: "TextArea", description: "job2 is a different job!"}
        ];

        $scope.createTab = function (jobName) {
            var job = _.find($scope.jobs, function(j){
                return j.name == jobName;
            });

            if (job) {
                var temp = {};
                temp.job = job;
                temp.index = jobSet.get().length;
                $window.console.log("Add tab: " + temp.index + " " + temp.job);
                jobSet.set(temp);
            }
        };
    }
]);