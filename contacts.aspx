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
    <nav id="navigation" class="navigation navbar navbar-inverse navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar-collapse" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            Contacts <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="<%= Page.ResolveUrl("~") %>contacts">Index</a></li>
                            <li><a href="<%= Page.ResolveUrl("~") %>contacts/new">New Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav><!-- #navigation -->
    <div id="main" class="main container" style="min-height:800px;" role="main">
    </div><!-- #main -->
    <footer id="footer" class="footer container" role="contentinfo">
        <p class="well well-sm text-center">&copy; <%= DateTime.Now.Year %> ASNA. All Rights Reserved.</p>
    </footer><!-- #footer -->
</div><!-- #wrapper -->

<script id="contact-table-view" type="text/template">
    <div class="pull-right">
        <a href="<%= Page.ResolveUrl("~") %>contacts/new" class="btn btn-sm btn-primary js-new">
            <span class="glyphicon glyphicon-plus"></span> New Contact
        </a>
    </div>
    <div class="page-header">
        <h2>Manage Contacts</h2>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="text-center">ID</th>
                    <th>Company</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</script>

<script id="contact-row-view" type="text/template">
    <td class="text-center text-muted">{{ id }}</td>
    <td>{{ company }}</td>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ email }}</td>
    <td class="col-sm-3 col-lg-2">
        <div class="btn-group btn-group-xs">
            <a href="<%= Page.ResolveUrl("~") %>contacts/{{ id }}" class="btn btn-info js-show">
                <span class="glyphicon glyphicon-chevron-right"></span> View
            </a>
            <a href="<%= Page.ResolveUrl("~") %>contacts/{{ id }}/edit" class="btn btn-primary js-edit">
                <span class="glyphicon glyphicon-pencil"></span> Edit
            </a>
            <button type="button" class="btn btn-danger js-delete">
                <span class="glyphicon glyphicon-remove"></span> Delete
            </button>
        </div>
    </td>
</script>

<script id="contact-detail-view" type="text/template">
    <div class="pull-right">
        <div class="btn-group btn-group-sm">
            <a href="<%= Page.ResolveUrl("~") %>contacts" class="btn btn-info js-index">
                <span class="glyphicon glyphicon-arrow-left"></span> Index
            </a>
            <a href="<%= Page.ResolveUrl("~") %>contacts/{{ id }}/edit" class="btn btn-primary js-edit">
                <span class="glyphicon glyphicon-pencil"></span> Edit
            </a>
        </div>
    </div>
    <div class="page-header">
        <h2>Contact Detail</h2>
    </div>
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{{ id }}</td>
                    </tr>
                    <tr>
                        <th>Company</th>
                        <td>{{ company }}</td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>{{ firstName }}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{{ lastName }}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ email }}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{{ phone }}</td>
                    </tr>
                    <tr>
                        <th>Address Line 1</th>
                        <td>{{ address1 }}</td>
                    </tr>
                    <tr>
                        <th>Address Line 2</th>
                        <td>{{ address2 }}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{{ city }}</td>
                    </tr>
                    <tr>
                        <th>State</th>
                        <td>{{ state }}</td>
                    </tr>
                    <tr>
                        <th>Postal Code</th>
                        <td>{{ postalCode }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</script>

<script id="contact-form-view" type="text/template">
    <div class="page-header">
        <h2>Contact Form</h2>
    </div>
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <form class="form-horizontal">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                        {% if (firstName) { %}
                            {{ firstName }} {{ lastName }}
                        {% } else { %}
                            New Contact
                        {% } %}
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label for="input_company" class="col-sm-3 control-label">Company</label>
                            <div class="col-sm-9">
                                <input id="input_company" type="text" name="company" class="form-control" value="{{ company }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_firstName" class="col-sm-3 control-label">First Name</label>
                            <div class="col-sm-9">
                                <input id="input_firstName" type="text" name="firstName" class="form-control" value="{{ firstName }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_lastName" class="col-sm-3 control-label">Last Name</label>
                            <div class="col-sm-9">
                                <input id="input_lastName" type="text" name="lastName" class="form-control" value="{{ lastName }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_email" class="col-sm-3 control-label">Email</label>
                            <div class="col-sm-9">
                                <input id="input_email" type="text" name="email" class="form-control" value="{{ email }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_phone" class="col-sm-3 control-label">Phone</label>
                            <div class="col-sm-9">
                                <input id="input_phone" type="text" name="phone" class="form-control" value="{{ phone }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_address1" class="col-sm-3 control-label">Address Line 1</label>
                            <div class="col-sm-9">
                                <input id="input_address1" type="text" name="address1" class="form-control" value="{{ address1 }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_address2" class="col-sm-3 control-label">Address Line 2</label>
                            <div class="col-sm-9">
                                <input id="input_address2" type="text" name="address2" class="form-control" value="{{ address2 }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_city" class="col-sm-3 control-label">City</label>
                            <div class="col-sm-9">
                                <input id="input_city" type="text" name="city" class="form-control" value="{{ city }}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_state" class="col-sm-3 control-label">State</label>
                            <div class="col-sm-9">
                                <select id="input_state" name="state" class="form-control">
                                    {% for (var abbr in states) { %}
                                    <option value="{{ abbr }}"{% if (state === abbr) { %} selected="selected"{% } %}>{{ states[abbr] }}</option>
                                    {% } %}
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="input_postalCode" class="col-sm-3 control-label">Postal Code</label>
                            <div class="col-sm-9">
                                <input id="input_postalCode" type="text" name="postalCode" class="form-control" value="{{ postalCode }}" />
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="clearfix">
                            <a href="<%= Page.ResolveUrl("~") %>contacts" class="btn btn-sm btn-default js-index">
                                <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                            </a>
                            <button type="button" class="btn btn-sm btn-primary pull-right js-submit">
                                Save Contact
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</script>

<script id="error-view" type="text/template">
    <div class="page-header">
        <h2>Oops! Something Went Wrong</h2>
    </div>
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><strong class="text-danger">Error: {{ code }} - {{ status }}</strong></h3>
                </div>
                <div class="panel-body">
                    <p>Please return to the front page and try again.</p>
                    <a href="<%= Page.ResolveUrl("~") %>contacts" class="btn btn-block btn-info js-index">
                        <span class="glyphicon glyphicon-arrow-left"></span> Return to Index
                    </a>
                </div>
            </div>
        </div>
    </div>
</script>

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