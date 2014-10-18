define([
    'app',
    'module/Tutorial/Controller/TutorialController'
],

function (App, TutorialController) {

    "use strict";

    App.module('Tutorial', function (Tutorial, App, Backbone, Marionette, $, _) {

        var tutorialController;

        var getController = function () {
            if (!tutorialController) {
                tutorialController = new TutorialController();
            }

            return tutorialController;
        };

        var TutorialRouter = Tutorial.TutorialRouter = Marionette.AppRouter.extend({
            appRoutes: {
                'tutorial/part-0-start': 'startAction',
                'tutorial/part-1-domain': 'domainAction',
                'tutorial/part-2-data': 'dataAction',
                'tutorial/part-3-page': 'pageAction',
                'tutorial/part-4-index': 'indexAction',
                'tutorial/part-5-show': 'showAction',
                'tutorial/part-6-crud': 'crudAction',
                'tutorial/part-7-backbone': 'backboneAction'
            }
        });

        var API = {
            startAction: function () {
                var controller = getController();
                App.setDocTitle('Start');
                App.router.navigate('tutorial/part-0-start');
                controller.startAction();
                App.trigger('asna:page_load');
            },
            domainAction: function () {
                var controller = getController();
                App.setDocTitle('Domain');
                App.router.navigate('tutorial/part-1-domain');
                controller.domainAction();
                App.trigger('asna:page_load');
            },
            dataAction: function () {
                var controller = getController();
                App.setDocTitle('Data');
                App.router.navigate('tutorial/part-2-data');
                controller.dataAction();
                App.trigger('asna:page_load');
            },
            pageAction: function () {
                var controller = getController();
                App.setDocTitle('Page');
                App.router.navigate('tutorial/part-3-page');
                controller.pageAction();
                App.trigger('asna:page_load');
            },
            indexAction: function () {
                var controller = getController();
                App.setDocTitle('Index');
                App.router.navigate('tutorial/part-4-index');
                controller.indexAction();
                App.trigger('asna:page_load');
            },
            showAction: function () {
                var controller = getController();
                App.setDocTitle('Show');
                App.router.navigate('tutorial/part-5-show');
                controller.showAction();
                App.trigger('asna:page_load');
            },
            crudAction: function () {
                var controller = getController();
                App.setDocTitle('CRUD');
                App.router.navigate('tutorial/part-6-crud');
                controller.crudAction();
                App.trigger('asna:page_load');
            },
            backboneAction: function () {
                var controller = getController();
                App.setDocTitle('Backbone');
                App.router.navigate('tutorial/part-7-backbone');
                controller.backboneAction();
                App.trigger('asna:page_load');
            }
        };

        App.on('route:tutorial:start', function () {
            App.trigger('asna:page_unload');
            API.startAction();
        });

        App.on('route:tutorial:domain', function () {
            App.trigger('asna:page_unload');
            API.domainAction();
        });

        App.on('route:tutorial:data', function () {
            App.trigger('asna:page_unload');
            API.dataAction();
        });

        App.on('route:tutorial:page', function () {
            App.trigger('asna:page_unload');
            API.pageAction();
        });

        App.on('route:tutorial:index', function () {
            App.trigger('asna:page_unload');
            API.indexAction();
        });

        App.on('route:tutorial:show', function () {
            App.trigger('asna:page_unload');
            API.showAction();
        });

        App.on('route:tutorial:crud', function () {
            App.trigger('asna:page_unload');
            API.crudAction();
        });

        App.on('route:tutorial:backbone', function () {
            App.trigger('asna:page_unload');
            API.backboneAction();
        });

        App.addInitializer(function () {
            new TutorialRouter({ controller: API });
        });

    });

    return App.Tutorial.TutorialRouter;

});
