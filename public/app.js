const ws = new WebSocket(`ws://${location.host}`)

ws.onmessage = (evt) => {
  if (evt.data === "reload") {
    location.reload()
  }
}