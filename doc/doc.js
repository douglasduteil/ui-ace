define(['module', 'root'], function (module, root) {

  var _, dfd, e$;

  _ = root[module.id] || "";
  dfd = new $.Deferred();

  requirejs(
    {
      paths: {
        'ui.ace': _ + "ui-ace"
      },
      shim: {
        'ui.ace': { deps: ['https://rawgithub.com/ajaxorg/ace-builds/v1.0.0/src-min-noconflict/ace.js'] }
      }
    },
    ['ui.ace'],
    function () {

      angular.module('doc.ui-ace', ['ui.ace', 'prettifyDirective'])
        .controller('DocCtrl', ['$scope', function ($scope) {
          $scope.aceModel = "Ace Hello World";
        }])
      ;
      e$ = $("#directives-ui-ace");
      e$.removeAttr("ng-non-bindable");

      angular.bootstrap(e$[0], ['doc.ui-ace']);

      dfd.resolve();

    }
  );


  return dfd.promise();

});