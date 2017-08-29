const socket = new WebSocket(getSocketUri());
let asks = [];

socket.addEventListener('open', e => {
  socket.send('open');
});

socket.addEventListener('message', e => {
  const message = JSON.parse(e.data);
  asks = message.data.asks.map(order => {

  });
  console.log(asks);
});

function getSocketUri() {
  const url = location.origin;
  return url.replace('http', 'ws');
}

function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
}
