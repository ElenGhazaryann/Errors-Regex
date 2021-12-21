"use strict";

function reverseString(s) {
  try {
    return s.split("").reverse().join("");
  } catch (error) {
    console.log("s.split is not a function");
  }
  return s;
}
console.log(reverseString("1234"));
