var app = app || {};

(function ($) {

  // The Application
  // ---------------
  app.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      
    },
    initialize: function () {
      console.log('initialize app view');
      this.listenTo(app.devices, 'all', this.addOne);
    },

    render: function () {
      
    },

    addOne: function (device) {
      console.log('this executed');
      var view = new app.DeviceView({ model: device });
      $('#devices').append(view.render().el);
    }

  });
})(jQuery);