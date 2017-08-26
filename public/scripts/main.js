const socket = new WebSocket(`ws://localhost:${port}`);

socket.addEventListener('open', e => {
  socket.send('open');
});

socket.addEventListener('message', e => {
  console.log('message from socket', e.data);
});
