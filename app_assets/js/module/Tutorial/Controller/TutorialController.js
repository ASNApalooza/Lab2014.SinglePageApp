define([
    'app',
    'module/Tutorial/View/StartView',
    'module/Tutorial/View/DomainView',
    'module/Tutorial/View/DataView',
    'module/Tutorial/View/PageView',
    'module/Tutorial/View/IndexView',
    'module/Tutorial/View/ShowView',
    'module/Tutorial/View/CrudView',
    'module/Tutorial/View/BackboneView'
],

function (App, StartView, DomainView, DataView, PageView, IndexView, ShowView, CrudView, BackboneView) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var TutorialController = Tutorial.TutorialController = Marionette.Controller.extend({

            startAction: function () {
                App.mainRegion.show(new StartView());
            },

            domainAction: function () {
                App.mainRegion.show(new DomainView());
            },

            dataAction: function () {
                App.mainRegion.show(new DataView());
            },

            pageAction: function () {
                App.mainRegion.show(new PageView());
            },

            indexAction: function () {
                App.mainRegion.show(new IndexView());
            },

            showAction: function () {
                App.mainRegion.show(new ShowView());
            },

            crudAction: function () {
                App.mainRegion.show(new CrudView());
            },

            backboneAction: function () {
                App.mainRegion.show(new BackboneView());
            }

        });

    });

    return App.Tutorial.TutorialController;

});
