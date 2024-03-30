const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("<h1>About</h1>");
  } else if (req.url === "/") {
    res.end("<h1>Home</h1>");
  } else {
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("server");
});
