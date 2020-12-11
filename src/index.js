const http = require("http");

const method = require("./constants/methods");
const get = require("./routers/get");
const post = require("./routers/post");
const port = 8081;

const server = http.createServer((req, res) => {
    req.method === method.GET && get(req, res);
    req.method === method.POST && post(req, res);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
