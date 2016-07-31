/**
 * Created by CheKedar on 2016/7/31.
 */
'use strict';

/* Services */

var appServices = angular.module('appServices');

appServices.factory('jobConfig', ["$window",
    function ($window) {
        var jobConfig = {};
        var callbacks = {};
        return {
            set: function(key,value){
                if(jobConfig[key] != value) {
                    jobConfig[key] = value;
                    angular.forEach(callbacks[key], function (callback, index) {
                        callback();
                    })
                }
            },
            get: function (key) {
                return jobConfig[key];
            },
            watch: function (key, callback) {
                if(!callbacks[key])
                    callbacks[key] =[];
                callbacks[key].push(callback);
                $window.console.log("watch, " + key + ": " + callbacks[key].length);
            },
            unwatch: function (key, callback) {
                if (callbacks[key]) {
                    var idx = callbacks[key].indexOf(callback);
                    if (idx != -1)
                        callbacks[key].splice(idx);
                }
                $window.console.log("unwatch, " + key + ": " + callbacks[key].length);
            }
        }
    }
]);