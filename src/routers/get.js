async function get(req, res) {
    res.write('<h1>Hello from NodeJS!!!</h1>');
    res.end();
}

module.exports = { get };
