define([
    'app',
    'text!module/Tutorial/View/templates/backbone.html'
],

function (App, backboneTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var BackboneView = Tutorial.BackboneView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(backboneTemplate)

        });

    });

    return App.Tutorial.BackboneView;

});
