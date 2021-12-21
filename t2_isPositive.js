"use strict";
function isPositive(a) {
  try {
    if (a > 0) {
      console.log("YES");
    } else if (a === 0) {
      throw new Error("a = Zero Error");
    } else if (a < 0) {
      throw new Error("a = Negative Error");
    } else if (isNaN(a)) {
      throw new Error(`${a} is not a number`);
    }
  } catch (err) {
    return err.message;
  }
}
console.log(isPositive(-231));
