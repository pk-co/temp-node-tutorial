const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is about page");
  }

  res.end(`
  <h1> Opps! </h1>
  <p> 404 not found !</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
