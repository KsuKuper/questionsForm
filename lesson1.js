// FOR loop

for (let i = 1; i < 11; i++){
   console.log(i);
};

// output: 1 2 3 4 5 6 7 8 9 10

for (let i = 1; i < 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// output: 1 2 3 4 6 7 8 9 10

for (let i = 1; i < 11; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// output: 1 2 3 4

// sum calculation

let sum = 0;
for (let i = 1; i < 11; i++) {
  //   sum = sum + i;
  sum += i;
  console.log(sum);
}

// output: 1 3 6 10 15 21 28 36 45 55

let sum1 = 0;
for (let i = 1; i < 11; i++) {
  //   sum = sum + i;
  sum1 += i;
}
console.log(sum1);

// output: 55

// WHILE loop

let x = 1;
while (x < 11) {
  console.log("this is x = " + x);
  x++;
}

// output:
// this is x = 1
// this is x = 2
// this is x = 3
// this is x = 4
// this is x = 5
// this is x = 6
// this is x = 7
// this is x = 8
// this is x = 9
// this is x = 10

let y = 1;
while (y < 11) {
  y++;
}
console.log("this is y = " + y);

// output: this is x = 11

// DO WHILE loop

let z = 1;
let sum2 = 0;
do {
  sum2 += z;
  z++;
  console.log(sum2);
} while (z < 11);

// output: 1 3 6 10 15 21 28 36 45 55

let a = 1;
let sum3 = 0;
do {
  sum3 += a;
  a++;
} while (a < 11);

console.log(sum3);

// output: 55

let arr1 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// output: 1 2 3 4 6 7

let arr2 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr2.length; i++) {
}

console.log(arr2.length);

// output: 7

console.log(arr2[1]);

// output: 2

let sum4 = 0;
let arr3 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr3.length; i++) {
  sum4 += arr3[i];
  console.log(sum4);
}

// output: 1 3 6 10 15 21 28

let sum5 = 0;
let arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
  sum5 += arr[i];
}
console.log(sum5);

// output: 28