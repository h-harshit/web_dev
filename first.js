// conditionals
// agar number moduled by 2 equals 0 => even
// nahi toh number moduled by 2 not equals 0 => odd

let x = 6;
if (x % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

let y = 19;
if (y % 2 == 0 && y % 3 == 0) {
  console.log("divisible by 6");
} else {
  console.log("not divisible by 6");
}

// prints good morning, good day or good evening based on time (format 24hrs)
let time = 4;
if (time > 5 && time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time < 18) {
  console.log("Good Day");
} else if (time >= 18 && time < 22) {
  console.log("Good evening");
} else if (time >= 22 && time <= 24) {
  console.log("Good night");
} else if (time > 0 && time <= 5) {
  console.log("Good night");
}
