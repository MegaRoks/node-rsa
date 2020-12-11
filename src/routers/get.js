module.exports = function get(rea, res) {
  res.write("<h1>Hello from NodeJS!</h1>");
  res.end();
};