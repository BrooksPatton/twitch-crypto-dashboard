const express = require('express');
const Gdax = require('gdax');
const WebSocket = require('ws');
const http = require('http');
const obUtils = require('./obUtils);

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const publicClient = new Gdax.PublicClient();

app.set('view engine', 'pug');

wss.on('connection', ws => {
  ws.on('message', data => {
    if(data === 'open') {
      getOrderBook((err, res, data) => {
        if(err) {
          throw err;
        }

        const obj = {
          data,
          highest: obUtils.getHighestOrder(data),
          lowest: obUtils.getLowestOrder(data)
        };

        ws.send(JSON.stringify(obj));
      });
    }
  });
});

function getOrderBook(cb) {
  publicClient.getProductOrderBook({level: 2}, cb);
}

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index', {port}));

server.listen(port, () => console.log(`Dashboard up and running on port ${port}`));
