import http from "http"

const PORT = 8080

const server = http.createServer((req, res) => {
  res.end("Hello World")
})
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})