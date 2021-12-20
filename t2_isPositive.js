"use strict";
function isPositive(a) {
  if (a > 1) {
    return "YES";
  } else if (a === 0) {
    throw "a = Zero Error";
  } else if (a < 0) {
    throw "a = Negative Error";
  }
}
console.log(isPositive(0));
