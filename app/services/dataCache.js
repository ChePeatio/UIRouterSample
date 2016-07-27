/**
 * Created by CheKedar on 2016/7/27.
 */
'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', []);

myAppServices.factory('dataCache', function () {
    var cache = {};
    var callbacks = {};
    return {
        set: function(key,value){
            if(cache[key] != value) {
                cache[key] = value;
                angular.forEach(callbacks[key], function (callback, index) {
                    callback();
                })
            }
        },
        get: function (key) {
            return cache[key];
        },
        watch: function (key, callback) {
            if(!callbacks[key])
                callbacks[key] =[];
            callbacks[key].push(callback);
        }
    }
});