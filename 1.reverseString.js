"use strict";

function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(error.message);
    return s;
  }
}
console.log(reverseString("1234"));
