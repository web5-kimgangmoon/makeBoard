const makeCloser = require("./test.js");

const { get, plus } = makeCloser;

plus();

module.exports = { plus, get };
