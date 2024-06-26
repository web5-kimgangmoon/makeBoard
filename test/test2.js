const makeCloser = require("./test.js");
const test3 = require("./test3.js");

const { get, plus } = makeCloser;

test3.plus();
console.log(test3.get());
plus();
console.log(get());
