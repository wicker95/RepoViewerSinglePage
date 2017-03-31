(function() {

  var app = angular.module("githubViewer", []);

  var mainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function(response){
      $scope.repos = response.data;
    }

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
      console.log(reason);
    };

    $scope.search = function(username){
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);      
    };

    $scope.message = "Github Repo Viewer";
    $scope.username = "";
    $scope.repoSortOrder = "+name";
  };

  app.controller("mainController", ["$scope", "$http", mainController]);

}());
