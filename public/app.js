const ws = new WebSocket(`ws://${location.host}`)

ws.onmessage = (evt) => {
  if (evt.data === "connected") {
    console.log("Message received")
  }
}