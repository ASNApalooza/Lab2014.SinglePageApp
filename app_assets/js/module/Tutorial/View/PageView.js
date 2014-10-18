define([
    'app',
    'text!module/Tutorial/View/templates/page.html'
],

function (App, pageTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var PageView = Tutorial.PageView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(pageTemplate)

        });

    });

    return App.Tutorial.PageView;

});
