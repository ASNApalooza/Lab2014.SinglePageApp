requirejs.config({
    baseUrl: '/app_assets/js',
    paths: {
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
