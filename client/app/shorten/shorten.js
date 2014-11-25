angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  angular.extend($scope, Links);
  $scope.link = {url: ''};
  $scope.addLink = function() {
    console.log('post link: ', $scope.link);
    $http.post('/api/links', $scope.link)
      .success(function(links){
      })
      .error(function(error) { console.error(error); });
  };
});
