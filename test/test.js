const makeCloser = () => {
  let i = 0;
  function get() {
    return i;
  }
  function plus() {
    i = i + 1;
  }
  return { get, plus };
};

module.exports = makeCloser();
