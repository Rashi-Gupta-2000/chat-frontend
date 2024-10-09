export function createWebSocket(onMessage) {
  const socket = new WebSocket("ws://localhost:8080");

  socket.onopen = () => {
    console.log("WebSocket connection established");
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    onMessage(message);
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };

  return socket;
}
