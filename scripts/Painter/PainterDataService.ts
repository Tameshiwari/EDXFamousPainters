/**
 * Created by Denys Chamberland on 5/30/2016.
 */
// <reference path="C:\TypeScript\EDXFamousPainters\scripts\typings\angularjs\angular.d.ts" />
// <reference path="C:\TypeScript\EDXFamousPainters\scripts\Painter\Painter.ts" />
module App.Painter.Services {

    import IPainter = App.Painter.IPainter;

    export interface IPainterDataService {
        getAllPainters(): ng.IPromise<IPainters>;
    }

    export interface IPainters {
        famousPainters: IPainter[];
    }

    class PainterDataService implements IPainterDataService {
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }

        getAllPainters(): ng.IPromise<IPainters> {
            return this.$http.get('/JSON/famousPainters.json')
                .then((response: ng.IHttpPromiseCallbackArg<IPainters>) => {
                    return response.data;
                });
        }
    }

    angular
        .module("famousPainters")
        .service('PainterDataService', PainterDataService);

}