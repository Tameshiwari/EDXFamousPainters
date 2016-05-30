/**
 * Created by Denys Chamberland on 5/30/2016.
 */
// <reference path="C:\TypeScript\EDXFamousPainters\scripts\typings\angularjs\angular.d.ts" />
// <reference path="C:\TypeScript\EDXFamousPainters\scripts\Painter\Painter.ts" />
var App;
(function (App) {
    var Painter;
    (function (Painter) {
        var Services;
        (function (Services) {
            var PainterDataService = (function () {
                function PainterDataService($http) {
                    this.$http = $http;
                }
                PainterDataService.prototype.getAllPainters = function () {
                    return this.$http.get('http://localhost:63342/EDXFamousPainters/JSON/famousPainters.json')
                        .then(function (response) {
                        return response.data;
                    });
                };
                PainterDataService.$inject = ["$http"];
                return PainterDataService;
            }());
            angular
                .module("famousPainters")
                .service('PainterDataService', PainterDataService);
        })(Services = Painter.Services || (Painter.Services = {}));
    })(Painter = App.Painter || (App.Painter = {}));
})(App || (App = {}));
//# sourceMappingURL=PainterDataService.js.map