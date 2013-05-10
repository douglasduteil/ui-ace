(function () {
  var _ = "assets/vendor/";

  /* =Launcher
   -----------------------------------------------------------------------------*/
  requirejs(
    {
      baseUrl: './',
      paths: {
        'jquery': _ + 'jquery.min',
        'twitter-bootstrap': _ + 'bootstrap.min',
        'prettyPrint': _ + 'prettify',
        'angular': _ + 'angular.min'
      },
      shim: {
        'core/prettifyDirective': { deps: ['prettyPrint', 'angular'] },
        'twitter-bootstrap': { deps: ['jquery'] }
      }
    },
    ['twitter-bootstrap', 'core/prettifyDirective'],
    function () {

      angular.module('x', ['prettifyDirective'])
        .controller('MainCtrl', [
          '$scope', function ($scope) {

            $scope.$root.isLoading = true;

            $scope.makeNav = function () {

              $scope.$root.sections = $.map($("section"), function (n) {
                return {
                  id: n.id,
                  name: n.id[0].toUpperCase() + n.id.slice(1)
                };
              });

              $scope.$root.isLoading = false;

            };

          }
        ]);

      angular.bootstrap(document, ['x']);
    });

})();


