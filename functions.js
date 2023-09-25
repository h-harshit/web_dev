function Hello(name) {
  console.log("Hello " + name);
}

function isPrime(number) {
  // prime number
  let prime = true; //flag  assumption
  if (number == 1) {
    console.log("neither prime nor comp");
  } else {
    for (let i = 2; i <= number; i++) {
      if (number % i == 0 && number !== i) {
        // number is divisible by i and i is not the number itself
        console.log("Number is composite");
        prime = false;
        break;
      }
    }
    if (prime == true) {
      console.log("Number is prime");
    }
  }
}

// isPrime(117);
// isPrime(2001);

function joinArray(arr) {
  let joined = arr.join(" ");
  console.log(joined);
}

// let arr = ["Today", "is", "a", "good", "day"];
// joinArray(arr);

// arrow functions
// const joinArray = (arr) => {
//   let joined = arr.join(" ");
//   console.log(joined);
// };

// string formatting
// my_name = "Harshit"
// job = "Engineer"
// console.log(`Hello my name is ${my_name} My job role is ${job}`)

function hello(name) {
  console.log(`Hello ${name}`);
}

// hello()

// arrow function
const helloArrow = (name) => {
  console.log(`Hello ${name}`);
};

// helloArrow();

// filter
let numArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddArr = [];
// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] % 2 == 1) {
//     oddArr.push(numArr[i]);
//   }
// }
// console.log(oddArr);

const oddArrFn = (num) => {
  if (num % 2 == 1) {
    return true;
  }
};

let oddArr = numArr.filter(oddArrFn);

const grThanFour = (num) => {
  if (num > 4) {
    return true;
  }
};

// [1,2,3,4,5,6,7,8]
let grThanFourArr = numArr.filter(grThanFour);
// console.log(grThanFourArr);

let ageArr = [13, 15, 11, 17, 21, 22];

const grThanFiftn = (age) => {
  if (age > 15) {
    return true;
  }
};

grThanFiftnArr = ageArr.filter(grThanFiftn);
// console.log(grThanFiftnArr);

// map

let myNumArr = [1, 2, 3, 4, 5];

const squareFunc = (num) => {
  return num * num;
};

let squareNumArr = myNumArr.map(squareFunc);
console.log(squareNumArr);

// forEach
