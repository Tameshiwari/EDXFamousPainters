/**
 * Created by Denys Chamberland on 5/30/2016.
 */
var App;
(function (App) {
    var Painter;
    (function (Painter) {
        var Controller;
        (function (Controller) {
            var PaintersController = (function () {
                function PaintersController(painterDataService) {
                    var _this = this;
                    this.selectedPainter = null;
                    painterDataService.getAllPainters()
                        .then(function (painters) {
                        _this.painters = painters.famousPainters;
                    });
                }
                PaintersController.$inject = ["PainterDataService"];
                return PaintersController;
            }());
            angular
                .module("famousPainters")
                .controller("PaintersController", PaintersController);
        })(Controller = Painter.Controller || (Painter.Controller = {}));
    })(Painter = App.Painter || (App.Painter = {}));
})(App || (App = {}));
//# sourceMappingURL=PainterController.js.map