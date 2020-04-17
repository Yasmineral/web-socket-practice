const express = require('express');
var PORT = process.env.PORT || 5000;
var socket = require('socket.io')
const app = express();

app.use(express.static('public'));

const server = app.listen(PORT, () => {
  console.log('Listening to requests on port 4000...')
})

// Socket setup
const io = socket(server)

io.on('connection', (socket) => {
  console.log('Made socket connection!', socket.id)

  // Handle chat event
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });
});


