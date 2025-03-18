const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

const UID = () => Math.random().toString(36).substring(2, 10);

const tasks = {
  pending: {
    title: 'pending',
    items: [
      {
        id: UID(),
        title: 'Send the Figma file do Dima',
        comments: [],
      },
    ],
  },
  ongoing: {
    title: 'ongoing',
    items: [
      {
        id: UID(),
        title: 'Review GitHub issues',
        comments: [
          {
            name: 'David',
            text: 'Ensure you review before merging',
            id: UID(),
          },
        ],
      },
    ],
  },
  completed: {
    title: 'completed',
    items: [
      {
        id: UID(),
        title: 'Create technical contents',
        comments: [
          {
            name: 'Dima',
            text: 'Make sure you check the requirements',
            id: UID(),
          },
        ],
      },
    ],
  },
};

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  },
});
const PORT = 3000;

app.get('/api', (req, res) => {
  res.json(tasks);
});

io.on('connection', (socket) => {
  console.log(`${socket.id} a user connected`);
});

server.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

// https://www.youtube.com/watch?v=ghEiqsES7cU - 23:38
