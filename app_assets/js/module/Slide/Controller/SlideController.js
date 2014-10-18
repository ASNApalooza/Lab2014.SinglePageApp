define([
    'app',
    'module/Slide/View/IndexView'
],

function (App, IndexView) {

    "use strict";

    App.module('Slide', function (Slide, App, Backbone, Marionette, $, _) {

        var SlideController = Slide.SlideController = Marionette.Controller.extend({

            indexAction: function () {
                App.mainRegion.show(new IndexView());
            }

        });

    });

    return App.Slide.SlideController;

});
