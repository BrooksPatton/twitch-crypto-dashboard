const express = require('express');
const Gdax = require('gdax');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

app.set('view engine', 'pug');

wss.on('connection', ws => {
  ws.on('message', data => {
    if(data === 'open') {
      ws.send('welcome to the fold!');
    }
  });
});

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', {port}));

server.listen(port, () => console.log(`Dashboard up and running on port ${port}`));
