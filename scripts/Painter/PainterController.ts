/**
 * Created by Denys Chamberland on 5/30/2016.
 */
module App.Painter.Controller {
    import IPainters = App.Painter.Services.IPainters;

    class PaintersController {
        selectedPainter: IPainter;
        painters: IPainter[];

        static $inject = ["PainterDataService"];
        constructor(
            painterDataService: App.Painter.Services.IPainterDataService) {
            this.selectedPainter = null;
            painterDataService.getAllPainters()
                .then((painters: IPainters): void => {
                    this.painters = painters.famousPainters;
                });
        }
    }

    angular
        .module("famousPainters")
        .controller("PaintersController", PaintersController);
} 