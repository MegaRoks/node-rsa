async function post(req, res) {
    res.write('<h1>Hello from NodeJS!</h1>');
    res.end();
}

module.exports = { post };
