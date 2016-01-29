// Code goes here

 angular.module('loadAngular', []).
  controller('largedatacontroller', ['$scope', function($scope){
      $scope.framework = 'ReactJs';
      $scope.data = [];
      for(var i = 0; i < 500; ++i) {
          $scope.data[i] = {};
          for(var j = 0; j < 10; ++j) {
              $scope.data[i][j] = Math.random();
          }
      }

  }]).directive('loadRepeat', function(){
      return{
          restrict: 'E',
          scope:{
              data: '='
          },
          link:function(scope, el, attrs){
              scope.$watch('data', function(newValue, oldValue){
                  React.renderComponent(
                      DATALIST({data:newValue}),
                      el[0]
                  );
              })
          }
      }
  })