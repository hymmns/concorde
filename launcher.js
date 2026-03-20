import { spawn } from "node:child_process"
import fs from "node:fs"

let serverProcess

function startServer() { 
  serverProcess = spawn("node", ["server.js"], { stdio: "inherit" })
}

fs.watch("server.js", () => {
  if (serverProcess) serverProcess.kill()
  
  startServer()
})

startServer()