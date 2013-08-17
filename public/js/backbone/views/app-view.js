var app = app || {};

(function ($) {

  // The Application
  // ---------------
  app.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      
    },
    initialize: function () {
      
      this.listenTo(app.models, 'add', this.addOne);
    },

    render: function () {
      
    },

    addOne: function (model) {
      var view = new app.ModelView({ model: model });
      $('#devices').append(view.render().el);
    }

  });
})(jQuery);