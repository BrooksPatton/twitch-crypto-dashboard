const socket = new WebSocket(getSocketUri());
let asks = [];
let bids = [];

socket.addEventListener('open', e => {
  socket.send('open');
});

socket.addEventListener('message', e => {
  const message = JSON.parse(e.data);
  const lowestAsk = message.lowestAsk;
  const highestAsk = message.highestAsk;
  const lowestBid = message.lowestBid;
  const highestBid = message.highestBid;

  asks = message.data.asks.map(order => {
    return [
      map(Number(order[0]), Number(lowestAsk), Number(highestAsk), 0, width/2),
       order[1],
       order[2]
    ];
  });

  bids = message.data.bids.map(order => {
    return [
      map(Number(order[0]), Number(lowestBid), Number(highestBid), width/2, width),
      order[1],
      order[2]
    ];
  });
  console.log(message);
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
  stroke(255);
  fill(255, 255, 0);

  asks.forEach(ask => {
    ellipse(ask[0], height/2, Number(ask[1]));
  });

  stroke(255);
  fill(0, 255, 255);

  bids.forEach(bid => {
    ellipse(bid[0], height/2, Number(bid[1]));
  });

  stroke(255, 0, 0);
  line(width/2, 0, width/2, height);
}
