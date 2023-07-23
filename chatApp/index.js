// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create an Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route handler for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define a socket.io connection event handler
io.on('connection', (socket) => {
  console.log('A user connected.');

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);
    io.emit('chat message', msg); // Broadcast the message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
