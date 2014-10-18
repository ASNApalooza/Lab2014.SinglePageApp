requirejs.config({
    baseUrl: '/Lab2014.SinglePageApp/app_assets/js',
    paths: {
        'almond': '../vendor/almond/almond',
        'backbone': '../vendor/backbone/backbone',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap',
        'jquery': '../vendor/jquery/dist/jquery',
        'marionette': '../vendor/marionette/lib/backbone.marionette',
        'text': '../vendor/requirejs-text/text',
        'underscore': '../vendor/underscore/underscore'
    },
    shim: {
        'bootstrap': ['jquery']
    },
    urlArgs: 'v=' + (new Date()).getTime()
});
