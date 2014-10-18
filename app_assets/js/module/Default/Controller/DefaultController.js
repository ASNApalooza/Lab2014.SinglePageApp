define([
    'app',
    'module/Default/View/IndexView'
],

function (App, IndexView) {

    "use strict";

    App.module('Default', function (Default, App, Backbone, Marionette, $, _) {

        var DefaultController = Default.DefaultController = Marionette.Controller.extend({

            indexAction: function () {
                App.mainRegion.show(new IndexView());
            }

        });

    });

    return App.Default.DefaultController;

});
