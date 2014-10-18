define([
    'app',
    'text!module/Slide/View/templates/index.html'
],

function (App, indexTemplate) {

    "use strict";

    App.module('Slide', function (Slide, App, Backbone, Marionette, $, _) {

        var IndexView = Slide.IndexView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(indexTemplate)

        });

    });

    return App.Slide.IndexView;

});
