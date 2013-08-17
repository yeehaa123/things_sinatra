var app = app || {};

(function () {

  var Router = Backbone.Router.extend({
    routes: {
      
    }

  });

  app.Router = new Router();
  Backbone.history.start({pushState: true});
})();