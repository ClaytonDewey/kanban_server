const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Clayton!');
});

io.on('connection', (socket) => {
  //
});

server.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

// https://www.youtube.com/watch?v=ghEiqsES7cU - 23:21
