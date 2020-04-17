const express = require('express');
const socket = require('socket.io')
const app = express();
const io = socket(server)

app.use(express.static('public'));

const server = app.listen(4000, () => {
  console.log('Listening to requests on port 4000...')
})

io.on('connection', (socket) => {
  console.log('Made socket connection!')
})

