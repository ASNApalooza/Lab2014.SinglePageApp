(function (globals) {

    "use strict";

    var App = globals.App;

    // Use curly-bracket style templating with Underscore.js
    // ERB-style templates cannot be used in an ASPX page
    // http://documentcloud.github.io/underscore/#template
    _.templateSettings.interpolate = /\{\{-(.+?)-\}\}/g;
    _.templateSettings.escape = /\{\{(.+?)\}\}/g;
    _.templateSettings.evaluate = /\{\%(.+?)\%\}/g;

    // Have to disable caching for Internet Explorer to work
    $.ajaxSetup({ cache: false });

    // Contact Model
    App.ContactModel = Backbone.Model.extend({
        urlRoot: App.config.baseUrl + 'api/contacts',
        defaults: {
            company: null,
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            address1: null,
            address2: null,
            city: null,
            state: null,
            postalCode: null
        },
        validate: function (attrs) {
            var errors = {};
            // company
            if (!$.trim(attrs.company)) {
                errors.company = 'Please enter the company name';
            } else if ($.trim(attrs.company).length > 40) {
                errors.company = 'Company cannot be longer than 40 characters';
            }
            // first name
            if (!$.trim(attrs.firstName)) {
                errors.firstName = 'Please enter the first name';
            } else if ($.trim(attrs.firstName).length > 40) {
                errors.firstName = 'First name cannot be longer than 40 characters';
            }
            // last name
            if (!$.trim(attrs.lastName)) {
                errors.lastName = 'Please enter the last name';
            } else if ($.trim(attrs.lastName).length > 40) {
                errors.lastName = 'Last name cannot be longer than 40 characters';
            }
            // email
            if (!$.trim(attrs.email)) {
                errors.email = 'Please enter the email address';
            } else if ($.trim(attrs.email).length > 40) {
                errors.email = 'Email cannot be longer than 40 characters';
            } else {
                var regex = /^([a-zA-Z0-9][-.\w]*@([a-zA-Z0-9][-\w]*[a-zA-Z0-9]\.)+[a-zA-Z]{2,9})$/;
                if (!regex.test($.trim(attrs.email))) {
                    errors.email = 'Email is not valid';
                }
            }
            // phone
            if (!$.trim(attrs.phone)) {
                errors.phone = 'Please enter the phone';
            } else if ($.trim(attrs.phone).length > 12) {
                errors.phone = 'Phone cannot be longer than 12 characters';
            } else {
                var regex = /^[\d]+$/;
                if (!regex.test($.trim(attrs.phone))) {
                    errors.phone = 'Phone must be numeric only';
                }
            }
            // address line 1
            if (!$.trim(attrs.address1)) {
                errors.address1 = 'Please enter the address line 1';
            } else if ($.trim(attrs.address1).length > 35) {
                errors.address1 = 'Address line 1 cannot be longer than 35 characters';
            }
            // address line 2
            if ($.trim(attrs.address2) && $.trim(attrs.address2).length > 35) {
                errors.address2 = 'Address line 2 cannot be longer than 35 characters';
            }
            // city
            if (!$.trim(attrs.city)) {
                errors.city = 'Please enter the city';
            } else if ($.trim(attrs.city).length > 30) {
                errors.city = 'City cannot be longer than 30 characters';
            }
            // state
            if (!$.trim(attrs.state)) {
                errors.state = 'Please select the state';
            }
            // postal code
            if (!$.trim(attrs.postalCode)) {
                errors.postalCode = 'Please enter the postal code';
            } else if ($.trim(attrs.postalCode).length > 10) {
                errors.postalCode = 'Postal code cannot be longer than 10 characters';
            }

            // return errors
            if (!_.isEmpty(errors)) {
                return errors;
            }
        }
    });

    // Contact Collection
    App.ContactCollection = Backbone.Collection.extend({
        url: App.config.baseUrl + 'api/contacts',
        model: App.ContactModel
    });

    // Contact Row View
    App.ContactRowView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template($('#contact-row-view').html()),
        events: {
            'click .js-show': 'onShowClicked',
            'click .js-edit': 'onEditClicked',
            'click .js-delete': 'onDeleteClicked'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        onShowClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts/' + this.model.id, { trigger: true });
        },
        onEditClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts/' + this.model.id + '/edit', { trigger: true });
        },
        onDeleteClicked: function (e) {
            e.preventDefault();
            var confirmed = confirm('Are you sure you want to delete this contact?');
            if (confirmed) {
                this.unbind();
                this.stopListening();
                this.model.destroy({
                    wait: true,
                    success: _.bind(function () {
                        this.$el.remove();
                    }, this)
                });
            }
        }
    });

    // Contact Table View
    App.ContactTableView = Backbone.View.extend({
        template: _.template($('#contact-table-view').html()),
        events: {
            'click .js-new': 'onNewClicked'
        },
        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },
        render: function () {
            this.$el.html(this.template({}));
            this.collection.each(this.addContact, this);

            return this;
        },
        addContact: function (contact) {
            var view = new App.ContactRowView({ model: contact });
            this.$el.find('tbody').append(view.render().el);
        },
        onNewClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts/new', { trigger: true });
        }
    });

    // Contact Detail View
    App.ContactDetailView = Backbone.View.extend({
        template: _.template($('#contact-detail-view').html()),
        events: {
            'click .js-index': 'onIndexClicked',
            'click .js-edit': 'onEditClicked'
        },
        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        onIndexClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts', { trigger: true });
        },
        onEditClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts/' + this.model.id + '/edit', { trigger: true });
        }
    });

    // Contact Form View
    App.ContactFormView = Backbone.View.extend({
        template: _.template($('#contact-form-view').html()),
        events: {
            'click .js-index': 'onIndexClicked',
            'click .js-submit': 'onSubmitClicked'
        },
        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
            this.listenTo(this.model, 'invalid', this.showErrors);
        },
        render: function () {
            this.$el.html(this.template(_.extend(this.model.toJSON(), { states: states })));

            return this;
        },
        showErrors: function (model) {
            var $form = this.$el.find('form');
            var errors = model.validationError;
            $form.find('.form-group.has-error').each(function () {
                $(this).removeClass('has-error');
            });
            $form.find('span.help-block').each(function () {
                $(this).remove();
            });
            _.each(errors, _.bind(function (value, key) {
                var $formGroup = this.$el.find('#input_' + key).closest('.form-group');
                var $helpBlock = $('<span>', {
                    'class': 'help-block',
                    'text': value
                });
                $formGroup.addClass('has-error').find('.form-control').after($helpBlock);
            }, this));
        },
        onIndexClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts', { trigger: true });
        },
        onSubmitClicked: function (e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.model.save(data, {
                wait: true,
                success: _.bind(this.onSaveSuccess, this),
                error: _.bind(this.onSaveError, this)
            });
        },
        onSaveSuccess: function (data, response, options) {
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts/' + this.model.id, { trigger: true });
        },
        onSaveError: function (data, response, options) {
            this.unbind();
            this.stopListening();
            this.trigger('error:sync', data, response, options);
        }
    });

    // Error View
    App.ErrorView = Backbone.View.extend({
        template: _.template($('#error-view').html()),
        events: {
            'click .js-index': 'onIndexClicked'
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },
        onIndexClicked: function (e) {
            e.preventDefault();
            this.unbind();
            this.stopListening();
            App.router.navigate('contacts', { trigger: true });
        }
    });

    // Contact Router
    App.ContactRouter = Backbone.Router.extend({
        routes: {
            '': 'indexAction',
            'contacts.aspx': 'indexAction',
            'contacts': 'indexAction',
            'contacts/new': 'newAction',
            'contacts/:id': 'showAction',
            'contacts/:id/edit': 'editAction'
        },
        indexAction: function () {
            var contacts = new App.ContactCollection();
            contacts.fetch({
                success: _.bind(function (data, response, options) {
                    var contactTableView = new App.ContactTableView({ collection: data });
                    $('#main').html(contactTableView.render().el);
                }, this),
                error: _.bind(this.errorAction, this)
            });
        },
        newAction: function () {
            var contact = new App.ContactModel();
            var contactFormView = new App.ContactFormView({ model: contact });
            contactFormView.on('error:sync', _.bind(this.errorAction, this));
            $('#main').html(contactFormView.render().el);
        },
        showAction: function (id) {
            var contact = new App.ContactModel({ id: id });
            contact.fetch({
                success: _.bind(function (data, response, options) {
                    var contactDetailView = new App.ContactDetailView({ model: data });
                    $('#main').html(contactDetailView.render().el);
                }, this),
                error: _.bind(this.errorAction, this)
            });
        },
        editAction: function (id) {
            var contact = new App.ContactModel({ id: id });
            contact.fetch({
                success: _.bind(function (data, response, options) {
                    var contactFormView = new App.ContactFormView({ model: data });
                    contactFormView.on('error:sync', _.bind(this.errorAction, this));
                    $('#main').html(contactFormView.render().el);
                }, this),
                error: _.bind(this.errorAction, this)
            });
        },
        errorAction: function (data, response, options) {
            var errorView = new App.ErrorView({
                model: new Backbone.Model({
                    code: response.status,
                    status: response.statusText
                })
            });
            $('#main').html(errorView.render().el);
        }
    });

    // initialize
    $(document).ready(function () {
        $('#navigation a').on('click', function (e) {
            e.preventDefault();
            var $link = $(this);
            var href = $link.attr('href');
            if ('#' !== href) {
                var location = href.replace(App.config.baseUrl, '');
                App.router.navigate(location, { trigger: true });
            }
        });
        new App.ContactRouter();
        App.router = Backbone.history;
        App.router.start({
            root: App.config.baseUrl,
            pushState: true
        });
    });

    // states object to populate the dropdown
    var states = {
        '': 'Please select a state',
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District of Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
    };

})(this);
