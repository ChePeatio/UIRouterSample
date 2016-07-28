/**
 * Created by CheKedar on 2016/7/28.
 */

'use strict';

var appController = angular.module("appControllers");

appController.controller('mainCtrl', ["$scope", "$state",
    function ($scope, $state) {
        $scope.tabs = [
            {heading: "Tab 1", router: "main.home"},
            {heading: "Tab 2", router: "main.jobs"}
        ];

        $scope.go = function (router) {
            $state.go(router);
        };

        $scope.$on("$stateChangeSuccess", function(){
            $scope.tabs.forEach(function (tab) {
                tab.active = $state.is(tab.router);
            });
        });
}]);