/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

/* Services */

var appServices = angular.module('appServices');

appServices.factory('jobSet', function () {
    var jobSet = [];
    return {
        set: function(value){
            jobSet.push(value);
        },
        get: function () {
            return jobSet;
        }
    }
});