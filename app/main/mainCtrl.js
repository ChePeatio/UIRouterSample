/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

var appController = angular.module("appControllers");

appController.controller('mainCtrl', ["$scope", "$state", "$window",
    function ($scope, $state, $window) {
        $scope.tabs = [
            {heading: "Tab 1", router: "main.home"},
            {heading: "Tab 2", router: "main.jobs"}
        ];

        $scope.go = function (router) {
            $window.console.log("fire the router");
            $state.go(router);
        };

        $scope.$on("$stateChangeSuccess", function(){
            $scope.tabs.forEach(function (tab) {
                tab.active = $state.is(tab.router);
            });
        });
}]);