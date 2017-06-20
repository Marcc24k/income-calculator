 var app1 = angular.module('app1', []);
 app1.controller('ctrl1', function ($scope) {
     $scope.wage = "hourly wage";
     $scope.workHrs = "hours worked";
     $scope.daysWorked = 5;
     $scope.monthIncome = 4;
     $scope.yearIncome = 12;
     $scope.updateValue = function () {
         $scope.calculation = "$" + $scope.wage + ' * ' + $scope.workHrs + "hrs" + " = " + "$" + (+$scope.wage * $scope.workHrs) + " daily"+  " Weekly Income " + "$" + (+$scope.wage * $scope.workHrs * $scope.daysWorked) + " Monthly Income " + "$" + (+$scope.wage * $scope.workHrs * $scope.daysWorked * $scope.monthIncome) + " Yearly Income " + "$" + (+$scope.wage * $scope.workHrs * $scope.daysWorked * $scope.monthIncome * $scope.yearIncome);
     }
 });