define([
    'app',
    'module/Download/View/IndexView'
],

function (App, IndexView) {

    "use strict";

    App.module('Download', function (Download, App, Backbone, Marionette, $, _) {

        var DownloadController = Download.DownloadController = Marionette.Controller.extend({

            indexAction: function () {
                App.mainRegion.show(new IndexView());
            }

        });

    });

    return App.Download.DownloadController;

});
