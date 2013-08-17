var io = require('socket.io').listen(3001);


io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('createStub', function(){
    var stub = {
      name: 'Device1',
      type: 'Arduino',
      actions: ['turnOn', 'turnOff', 'blinkLight'],
      channel: 'channel1'
    };

    socket.emit('newDevice', stub);

    console.log("create device stub");
  });
});
