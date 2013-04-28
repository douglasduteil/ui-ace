
define(['module'],function (module) {

  console.log(module);
  console.log(module.config());
  //require(['/modules/directives/ui-codemirror/ui-codemirror.js', 'http://codemirror.net/lib/codemirror.js']);

  /*
   angular.module('doc.ui-ace', ['ui.ace'])
   .controller('DocCtrl', ['$scope', function($scope){
   $scope.aceModel = "Ace Hello World";
   }])
   ;
  requirejs(
    {
      paths :  {
        'ui.codemirror' : root + 'ui-codemirror'
      },
      shim : {
        'ui.codemirror' : { deps: ['http://codemirror.net/lib/codemirror.js'] }
      }
    },
    ['ui.codemirror'],
    function(){

      angular.module('doc.codeMirror', ['ui.codemirror'])
        .controller('DocCtrl', ['$scope', function($scope){
          $scope.codeMirrorModel = "Hello";
        }])
      ;


    }
  );  */
});