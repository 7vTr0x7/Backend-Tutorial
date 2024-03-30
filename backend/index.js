import http from "http";
import name from "./features.js";
import { add } from "./features.js";

import fs from "fs";

const home = fs.readFileSync("./index.html");

console.log(name);
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end(`<h1>${add()}</h1>`);
  } else if (req.url === "/") {
    res.end(home);
  } else {
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("server");
});
