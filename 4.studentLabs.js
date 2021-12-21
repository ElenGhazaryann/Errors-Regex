function gradeLabs(arr, arr1) {
  for (let i = 0; i < arr.length; i++) {
    try {
      let code = arr[i].runLab(i);
      console.log(`${arr[i].student}'s code is ${code}`);
    } catch (error) {
      console.log("Error thrown");
    }
  }
}
let studentLabs2 = [
  {
    student: "Blake",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    myCode: function (num) {
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
