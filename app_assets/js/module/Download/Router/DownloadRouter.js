define([
    'app',
    'module/Download/Controller/DownloadController'
],

function (App, DownloadController) {

    "use strict";

    App.module('Download', function (Download, App, Backbone, Marionette, $, _) {

        var downloadController;

        var getController = function () {
            if (!downloadController) {
                downloadController = new DownloadController();
            }

            return downloadController;
        };

        var DownloadRouter = Download.DownloadRouter = Marionette.AppRouter.extend({
            appRoutes: {
                'downloads': 'indexAction'
            }
        });

        var API = {
            indexAction: function () {
                var controller = getController();
                App.setDocTitle('Downloads');
                App.router.navigate('downloads');
                controller.indexAction();
                App.trigger('asna:page_load');
            }
        };

        App.on('route:downloads:index', function () {
            App.trigger('asna:page_unload');
            API.indexAction();
        });

        App.addInitializer(function () {
            new DownloadRouter({ controller: API });
        });

    });

    return App.Download.DownloadRouter;

});
