define([
    'app',
    'text!module/Tutorial/View/templates/start.html'
],

function (App, startTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var StartView = Tutorial.StartView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(startTemplate)

        });

    });

    return App.Tutorial.StartView;

});
