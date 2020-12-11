const http = require('http');
const socket = require('socket.io');

const fs = require('fs');

const { method } = require('./constants/methods');
const { get } = require('./routers/get');
const { post } = require('./routers/post');

const port = process.env.SERVER_PORT;

const { client } = require('./db');
global.dbClient = client;

const server = http.createServer((req, res) => {
    req.method === method.GET && get(req, res);
    req.method === method.POST && post(req, res);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const { connectionSocket } = require('./socket');
connectionSocket(socket, server);