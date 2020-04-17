const express = require('express');
var socket = require('socket.io')
const app = express();

app.use(express.static('public'));

const server = app.listen(4000, () => {
  console.log('Listening to requests on port 4000...')
})

// Socket setup
const io = socket(server)

io.on('connection', (socket) => {
  console.log('Made socket connection!', socket.id)
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });
});

