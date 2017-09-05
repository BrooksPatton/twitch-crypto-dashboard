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

  setupOrders(asks, message.data.asks, lowestAsk, highestAsk, 0, 'ask');
  console.log('asks', asks);

  console.log(message);
});

function getSocketUri() {
  const url = location.origin;
  return url.replace('http', 'ws');
}

function setup() {
  createCanvas(2500, 430);
  background(0);
}

function draw() {
  background(0);
  asks.forEach(ask => {
    ask.run();
  });

  stroke(255, 0, 0);
  line(width/2, 0, width/2, height);
}

function setupOrders(target, rawOrders, lowest, highest, startX, type) {
  const xInc = (width/2) / rawOrders.length;
  let currentX = 0 - xInc;

  rawOrders.forEach(order => {
    const price = map(Number(order[0]), lowest, highest, startX, startX + width / 2);
    const location = createVector(currentX, height);
    const amount = Number(order[1]) * 4;
    const orderId = order[2];
    const newOrder = new Order(price, amount, orderId, type, location);

    target.push(newOrder);

    currentX = currentX + xInc;
  });
}
