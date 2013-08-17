var app = app || {};

(function ($) {

  app.DeviceView = Backbone.View.extend({
    tagName: 'li',
    className: 'device animated bounceIn',
    template: _.template('<li><%= type %>: <%= name %><br>Actions: <%= actions %></li>'),

    events: {

    },

    initialize: function(){
      
    },

    render: function(){
      console.log('device view rendered');
      console.log('with device attributes:', this.model.attributes);
      this.$el.html(this.template(this.model.attributes));
    }

    
  });
})(jQuery);