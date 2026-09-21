const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const os = require("os");

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) return iface.address;
    }
  }
  return "localhost";
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  const ip = getLocalIP();
  console.log(`\n  Jogo da Forca rodando em:`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Rede:    http://${ip}:${PORT}\n`);
});
