angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  angular.extend($scope, Links);
  $scope.link = {url: ''};
  $scope.addLink = function() {
    // console.log('post link: ', $scope.link);
    if (!$scope.link.url.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i)) {
      console.error('Not a valid link');
      return void 0;
    }
    $http.post('/api/links', $scope.link)
      .then(function(res){
        console.log('shortly.com/' + res.data.code);
      })
      .catch(function(err){
        console.log(err.status);
      });
      // .success(function(links){
      // })
      // .error(function(error) { console.error(error); });
  };
});
