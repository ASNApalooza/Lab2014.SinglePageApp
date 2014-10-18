require([
    'app',
    'module/Default/Router/DefaultRouter',
    'module/Download/Router/DownloadRouter',
    'module/Slide/Router/SlideRouter',
    'module/Tutorial/Router/TutorialRouter',
    'bootstrap'
],

function (App) {

    "use strict";

    window.App = App;

    App.start({ baseUrl: $('#base_url').val() });

});
