var app = app || {};

(function () {
  
  var Models = Backbone.Collection.extend({
    
    model: app.Model
  });

  app.models = new Models();
})();