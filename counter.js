// CommonJS
// código interno
var counter = 0;

function count() {
  console.log(counter);
  counter++;
}

// exportaciones (exports)
module.exports = {
  count: count,
};
