function connectionSocket(socket, server) {
    const io = socket(server);

    io.on('connection', function (socket) {
        console.log('Made socket connection');

        socket.emit('test', { hello: 'test' });
        socket.on('other_event', function (data) {
            console.log(data);
        });
    });
}

module.exports = { connectionSocket };
