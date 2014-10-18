define([
    'app',
    'text!module/Default/View/templates/index.html'
],

function (App, indexTemplate) {

    "use strict";

    App.module('Default', function (Default, App, Backbone, Marionette, $, _) {

        var IndexView = Default.IndexView = Marionette.ItemView.extend({

            template: _.template(indexTemplate)

        });

    });

    return App.Default.IndexView;

});
