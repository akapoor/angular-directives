/**
 * Created by anshulkapoor on 6/22/16.
 */

var app = angular.module('testApp', []);

app.controller('mainCtrl', function($scope){
	$scope.person = {
		name: "Barney",
		age: 27,
		location: "New York"
	}
});

app.directive('irBoxes', function(){
	return{
		scope: {
			count: '='
		},
		template: function() {
			return '<span ng-repeat="i in getLine(count) track by $index" ng-init="j=$index" ng-click="printMe(j)" class="box"></span>'
		},
		link: function(scope, el, arr){

			scope.getLine = function(n) {
				return new Array(parseInt(n));
			}
			scope.printMe = function(num) {
				console.log(num);
			}
		}
	}
})