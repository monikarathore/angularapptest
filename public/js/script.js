var myApp = angular.module('myApp',['ngRoute']);
myApp.controller("loginController", ["$scope","$log","$location",function($scope,$log,$location,loginController){
    //$log.info($location);
   // $scope.users = [ {name: "monika",pass: "password"} ];
   $scope.userName = "monika";
   $scope.password = "password";
   
   $scope.submitLogin = function() {
        if ($scope.loginForm.$valid) {
          alert('our form is amazing');
            $location.path('/dashboard');
        }
        
   };


}]);

myApp.config(function ($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: '/login.html',
        controller: 'loginController'
    }).
    when('/dashboard', {
        templateUrl: '/dashboard.html',
        controller: 'dashboardController'
    }).
    otherwise({
        redirectTo: 'login'
    });
});
