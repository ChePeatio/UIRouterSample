/**
 * Created by CheKedar on 2016/7/27.
 */

var myControllers = angular.module('appControllers', ['myAppServices']);

myControllers.controller("mainController", function($rootScope, $scope, $state) {
    $scope.tabs = [
        {heading: "Tab 1", router: "main.tab1", active: false},
        {heading: "Tab 2", router: "main.tab2", active: true},
        {heading: "Tab 3", router: "main.tab3", active: false}
    ];

    $scope.go = function (router) {
        $state.go(router);
    };

    $scope.active = function (router) {
        return $state.is(router);
    };

    $scope.$on("$stateChangeSuccess", function(){
        $scope.tabs.forEach(function (tab) {
            tab.active = $scope.active(tab.router);
        });
    });
});

myControllers.controller("tab1Controller", function ($scope, $state, $http, dataCache) {
    var exist = dataCache.get("sss");
    if (exist) {
        $scope.taskGroup = exist;
    } else {
        $http.get("data/taskGroup.json").success(function (data) {
            dataCache.set("sss", data);
            $scope.taskGroup = data;
//            angular.forEach(data, function (d,idx) {
//                dataCache.set(d.heading,d);
//           })
        });
    }

    $scope.go = function (router) {
        $state.go(router);
    };

    $scope.active = function (router) {
        return $state.is(router);
    };

    $scope.$on("$stateChangeSuccess", function(){
        $scope.taskGroup.forEach(function (tab) {
            tab.active = $scope.active(tab.router);
        });
    });
});