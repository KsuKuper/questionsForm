
// type of + even

let myArr = ["12", 10, "10", 23, 55];
function isEven(arr) {
  for (let i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] === "number" && myArr[i] % 2 !== 0) {
      console.log(myArr[i]);
    }
  }
}
isEven(myArr);

let arr = ["12", 10, "10", 23, 55];
let arr2 = [];
function isFirstLastElement(arr) {
  if (arr.length > 0) {
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
  } else {
    console.log("Array is empty");
  }
}
isFirstLastElement(arr2);

let a = "hello, friends";
function isFirstLetter(string) {
  if (string.startsWith("h") || string.startsWith("H")) {
    console.log("Phrase starts from H");
  } else {
    console.log("Phrase is not start from H");
  }
}
isFirstLetter(a);

let b = "ello, friends";
function isIncludeHello(string) {
  if (
    (string.includes("Hello") || string.includes("hello")) &&
    (string.startsWith("h") || string.startsWith("H"))
  ) {
    console.log("Phrase includes of Hello");
  } else {
    console.log("Phrase is not include of Hello");
  }
}
isIncludeHello(b);
