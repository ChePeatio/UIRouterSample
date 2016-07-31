/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

/* Services */

var appServices = angular.module('appServices');

appServices.factory('jobSet', ["$window",
    function ($window) {
        var jobSet = [];
        return {
            set: function (value) {
                jobSet.push(value);
                $window.console.log("Current jobSet size: " + jobSet.length);
            },
            get: function () {
                return jobSet;
            }
        }
    }
]);