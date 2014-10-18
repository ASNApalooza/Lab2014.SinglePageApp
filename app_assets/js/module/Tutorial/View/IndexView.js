define([
    'app',
    'text!module/Tutorial/View/templates/index.html'
],

function (App, indexTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var IndexView = Tutorial.IndexView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(indexTemplate)

        });

    });

    return App.Tutorial.IndexView;

});
