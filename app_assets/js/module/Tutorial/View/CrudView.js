define([
    'app',
    'text!module/Tutorial/View/templates/crud.html'
],

function (App, crudTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var CrudView = Tutorial.CrudView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(crudTemplate)

        });

    });

    return App.Tutorial.CrudView;

});
