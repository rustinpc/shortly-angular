angular.module('shortly.links', [])


.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  angular.extend($scope, Links);
  // $scope.data = {};
  // $scope.getLinks = function() {
  //   console.log('get links');
  //   $http.get('/api/links')
  //     .success(function(data){
  //       $scope.data.links = data;
  //       console.log('success: ', data, $scope.data);
  //     })
  //     .error(function(error) { console.error(error); });
  // };
  // $scope.init = function() {
  //   $scope.getLinks();
  // };
});
