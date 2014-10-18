define([
    'backbone',
    'marionette',
    'jquery',
    'underscore'
],

function (Backbone, Marionette, $, _) {

    "use strict";

    var App = new Marionette.Application();

    // Add regions
    App.addRegions({
        navRegion: '#navigation',
        mainRegion: '#main',
        footerRegion: '#footer'
    });

    // Set the document title
    App.setDocTitle = function (str) {
        document.title = str + ' | Build a Single-Page App with an AVR Web API';
    };

    // Add navigation events
    var addNavTriggers = function () {
        var $triggers = $('a[data-asna-nav^="route"]');
        if ($triggers.length > 0) {
            $triggers.on('click.asna-nav', function (e) {
                e.preventDefault();
                $('#navbar-collapse').removeClass('in');
                $('#main').fadeOut('slow', function () {
                    var $target = $(e.target);
                    var eventName = $target.attr('data-asna-nav');
                    var args = $target.attr('data-asna-nav-args');
                    args = args ? args.split('|') : [];
                    args.unshift(eventName);
                    App.trigger.apply(App, args);
                });
            });
        }
    };

    // Remove navigation events
    var removeNavTriggers = function () {
        var $triggers = $('a[data-asna-nav^="route"]');
        if ($triggers.length > 0) {
            $triggers.off('click.asna-nav');
        }
    };

    // Reset scrollTop
    var updateScrollTop = function () {
        $('html').scrollTop(0);
    };

    // Custom page_unload event handler
    App.on('asna:page_unload', function () {
        removeNavTriggers();
    });

    // Custom page_load event handler
    App.on('asna:page_load', function () {
        updateScrollTop();
        $('#main').fadeIn('slow', function () {
            prettyPrint();
            addNavTriggers();
        });
    });

    // Enable routing
    App.on('start', function (config) {
        if (Backbone.history) {
            App.router = Backbone.history;
            App.router.start({ root: config.baseUrl });
        }
    });

    return App;

});
