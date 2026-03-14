import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const PORT = 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, "public")
const file = "index.html"

const server = http.createServer((req, res) => {

  fs.readFile(path.join(filePath, file), (err, fileContent) => {

    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" })
      res.end("File Not Found")
      return
    }

    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(fileContent)
  });

  
})
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})