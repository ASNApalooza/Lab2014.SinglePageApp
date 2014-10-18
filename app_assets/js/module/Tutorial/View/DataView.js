define([
    'app',
    'text!module/Tutorial/View/templates/data.html'
],

function (App, dataTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var DataView = Tutorial.DataView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(dataTemplate)

        });

    });

    return App.Tutorial.DataView;

});
