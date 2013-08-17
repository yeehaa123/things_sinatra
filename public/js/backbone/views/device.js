var app = app || {};

(function ($) {

  app.DeviceView = Backbone.View.extend({
    tagName: 'li',
    className: 'device animated bounceIn',
    template: _.template('<li><%= type %>: <%= name %><br>Actions: <%= actions %></li>'),

    events: {

    },

    initialize: function(){
      this.$el.hammer().on("tap", function(event) {
        console.log(this, event);
        $(this).attr('class', 'device').addClass('animated pulse');
      });
    },

    render: function(){
      console.log('device view rendered');
      console.log('with device attributes:', this.model.attributes);
      this.$el.html(this.template(this.model.attributes));
    }

    
  });
})(jQuery);