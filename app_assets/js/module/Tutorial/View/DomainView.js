define([
    'app',
    'text!module/Tutorial/View/templates/domain.html'
],

function (App, domainTemplate) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var DomainView = Tutorial.DomainView = Marionette.ItemView.extend({

            className: 'container',

            template: _.template(domainTemplate)

        });

    });

    return App.Tutorial.DomainView;

});
