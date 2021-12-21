# _Errors_

# _Literature_

## **Errors**

- [JavaScript Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [7 types of Errors in JavaScript](https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492)
- [Error Handling](https://javascript.info/try-catch)
- [JavaScript Error handling](https://www.tutorialrepublic.com/javascript-tutorial/javascript-error-handling.php)
- [try/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## **Regex**

- [Regex methods](https://javascript.info/regexp-methods)
- [Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### - <span style="color:LightBlue">Task1.</span> Complete the `reverseString` function, it has one parameter s. You must perform the following actions:

- Try to reverse string s using the split, reverse, and join methods.
- If an exception is thrown, catch it and print the contents of the exception's message on a new line.
- Print s on new line. If no exception was thrown, then this should be the reversed string, if an
  exception was thrown, this should be the original string.

[Task1](https://github.com/ElenGhazaryann/Errors-Regex/blob/main/t1_reverseString.js)

### - <span style="color:LightBlue">Task2.</span> Complete the `isPositive` function below. It has one integer parameter a .

- If a is positive, return string YES
- If a is 0, throw an Error with message = Zero Error.
- If a is negative, throw an Error with message = Negative Error.

[Task2](https://github.com/ElenGhazaryann/Errors-Regex/blob/main/t2_isPositive.js)

### - <span style="color:LightBlue">Task3.</span> Convert the code using `try...catch`.

```js
function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}
```

[Task3](https://github.com/ElenGhazaryann/Errors-Regex/blob/main/t3_convertTryCatch.js)

### - <span style="color:LightBlue">Task4.</span> A teacher has created a `gradeLabs` function that verifies if student programming labs work.

This function loops over an array of JavaScript objects that should contain a `student` property and `runLab` property.

```js
let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
gradeLabs(studentLabs2);
```

Add a `try/catch` block inside of `gradeLabs` to catch an exception if the `runLab` property is not defined.
If the exception is thrown, the result should be set to the text `"Error thrown"`.

# _Regex_

### - <span style="color:LightBlue">Task1.</span> - Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:

    - Exactly 4 or 6 characters.
    - Only numerical characters (0-9).
    - No whitespace.

| Input                     | Output |
| ------------------------- | :----: |
| myRegExp.test(`"1234"`)   |  true  |
| myRegExp.test(`"12334"`)  | false  |
| myRegExp.test(`"89abc1"`) | false  |
| myRegExp.test(`"900876"`) |  true  |
| myRegExp.test(`"4983"`)   | false  |

[Task1](https://github.com/ElenGhazaryann/Errors-Regex/blob/main/regex.js)

### - <span style="color:LightBlue">Task2.</span>

```js const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>";
```
