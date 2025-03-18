const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!!!!!!');
});

io.on('connection', (socket) => {
  console.log(`a user connected`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

// https://www.youtube.com/watch?v=ghEiqsES7cU - 23:38
