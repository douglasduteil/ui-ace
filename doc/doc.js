angular.module('doc.ui-ace', ['ui.ace'])
  .controller('DocCtrl', ['$scope', function($scope){
    $scope.aceModel = "Ace Hello World";
  }])
;