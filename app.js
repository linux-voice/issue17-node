var app = require('express')();
var server = app.listen(9999);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/sourcecode', function(req, res) {
  res.sendFile(__dirname + '/app.js');
});

io.on('connection', function (socket) {
  socket.on('news', function (data) {
    io.emit('news', data);
  });
});
