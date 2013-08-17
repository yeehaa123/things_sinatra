var app = app || {};

(function ($) {

  app.DeviceView = Backbone.View.extend({
    tagName: 'li',
    className: 'device',
    template: _.template('<li><%= name %></li>'),

    events: {

    },

    initialize: function(){
      this.listenTo(this.model, "all", this.render);
    },

    render: function(){
      console.log('device view rendered');
      this.$el.html(this.template(this.model.attributes));
    }

    
  });
})(jQuery);