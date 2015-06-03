var app = angular.module("magazine",['ui.router']);

app.controller("home", ['$scope', function($scope){
  $scope.selectFile = function(){
    $("#fileInput").click();
  }
}]);

app.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
  $stateProvider
    .state('home',{
      url: '',
      controller: 'home',
      templateUrl: 'home.html'
    });
  $urlRouterProvider.otherwise('');
  }
]);

app.service("uploadFile", ["$http", function($http){
  this.uploadFileToUrl = function(file){

    var fd = new FormData();
    fd.append('file', file);
    return $http.post('/parseCSV',fd, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    }).success(function(data){
    }).error(function(data){
    });
  }
}]);

atm.directive('fileModel', ['$parse', function($parse){
return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
