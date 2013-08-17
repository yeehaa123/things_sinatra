$(document).ready(function(){
   ws = new WebSocket("ws://nick.local:8080/");
   ws.onmessage = function(evt) {
    parsed = JSON.parse(evt.data);
    var method = parsed.method;
    var args = parsed.args;
    eval(method + '(' + args + ')');
  };
   ws.onclose = function() { debug("socket closed"); };
   ws.onopen = function() {
     debug("connected...");
     // ws.send("hello server");
   };
 });

function newDevice(args) {
  console.log("created new devices" + args);
  deviceModel = new app.Device({
    name: device.name,
    type: device.type,
    actions: device.actions
  });
}

$('#devices').hammer().on("tap", ".device", function(event) {
  console.log(this, event);
});