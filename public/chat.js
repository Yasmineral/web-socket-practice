var socket = io.connect("http://localhost:4000");

// Query DOM
 
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Emit events

btn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// Listen for events

socket.on('chat', (data) => {
  output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>"
})

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
})

socket.on('typing', (data) => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message..." + "</em></p>"
}) 