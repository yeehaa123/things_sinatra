var app = app || {};

(function () {
  
  var Devices = Backbone.Collection.extend({
    
    model: app.Device
  });

  app.devices = new Devices();
})();