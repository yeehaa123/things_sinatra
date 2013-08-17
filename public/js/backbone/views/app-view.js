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
      this.listenTo(app.devices, 'add', this.addOne);
    },

    render: function () {
      
    },

    logger: function(data){
      console.log(data);
    },

    addOne: function (device) {
      var view = new app.DeviceView({ model: device });
      view.render();
      $('#devices').append(view.el);
    }

  });
})(jQuery);