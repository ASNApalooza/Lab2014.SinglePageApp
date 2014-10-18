define([
    'app',
    'module/Default/Controller/DefaultController'
],

function (App, DefaultController) {

    "use strict";

    App.module('Default', function (Default, App, Backbone, Marionette, $, _) {

        var defaultController;

        var getController = function () {
            if (!defaultController) {
                defaultController = new DefaultController();
            }

            return defaultController;
        };

        var DefaultRouter = Default.DefaultRouter = Marionette.AppRouter.extend({
            appRoutes: {
                '': 'indexAction',
                'overview': 'indexAction'
            }
        });

        var API = {
            indexAction: function () {
                var controller = getController();
                App.setDocTitle('Overview');
                App.router.navigate('overview');
                controller.indexAction();
                App.trigger('asna:page_load');
            }
        };

        App.on('route:default:index', function () {
            App.trigger('asna:page_unload');
            API.indexAction();
        });

        App.addInitializer(function () {
            new DefaultRouter({ controller: API });
        });

    });

    return App.Default.DefaultRouter;

});
