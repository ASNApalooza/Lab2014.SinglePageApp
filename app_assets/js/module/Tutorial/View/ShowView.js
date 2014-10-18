define([
    'app',
    'text!module/Tutorial/View/templates/show.html'
],

function (App, showTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var ShowView = Tutorial.ShowView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(showTemplate)

        });

    });

    return App.Tutorial.ShowView;

});
