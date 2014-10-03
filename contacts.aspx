<%@ Page Language="AVR" AutoEventWireup="false" CodeFile="contacts.aspx.vr" Inherits="contacts"
%><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Contacts</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="<%= Page.ResolveUrl("~") %>Assets/css/bootstrap.css" rel="stylesheet" />
    <link href="<%= Page.ResolveUrl("~") %>Assets/css/bootstrap-theme.css" rel="stylesheet" />
    <link href="<%= Page.ResolveUrl("~") %>Assets/css/main.css" rel="stylesheet" />
</head>
<body role="application">
<div id="wrapper" class="wrapper">
</div><!-- #wrapper -->
<script>
(function (globals) {
    var App = globals.App = {};
    App.config = { baseUrl: "<%= Page.ResolveUrl("~") %>" };
})(this);
</script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/vendor/jquery.js"></script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/vendor/underscore.js"></script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/vendor/backbone.js"></script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/vendor/backbone.syphon.js"></script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/vendor/bootstrap.js"></script>
<script src="<%= Page.ResolveUrl("~") %>Assets/js/main.js"></script>
</body>
</html>