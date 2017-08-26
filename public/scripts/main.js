const socket = new WebSocket(getSocketUri());

socket.addEventListener('open', e => {
  socket.send('open');
});

socket.addEventListener('message', e => {
  console.log('message from socket', e.data);
});

function getSocketUri() {
  const url = location.origin;
  return url.replace('http', 'ws');
}
