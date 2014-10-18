define([
    'app',
    'module/Slide/Controller/SlideController'
],

function (App, SlideController) {

    "use strict";

    App.module('Slide', function (Slide, App, Backbone, Marionette, $, _) {

        var slideController;

        var getController = function () {
            if (!slideController) {
                slideController = new SlideController();
            }

            return slideController;
        };

        var SlideRouter = Slide.SlideRouter = Marionette.AppRouter.extend({
            appRoutes: {
                'slides': 'indexAction'
            }
        });

        var API = {
            indexAction: function () {
                var controller = getController();
                App.setDocTitle('Slides');
                App.router.navigate('slides');
                controller.indexAction();
                App.trigger('asna:page_load');
            }
        };

        App.on('route:slides:index', function () {
            App.trigger('asna:page_unload');
            API.indexAction();
        });

        App.addInitializer(function () {
            new SlideRouter({ controller: API });
        });

    });

    return App.Slide.SlideRouter;

});
