// In javascript you can have multiple data types in an array
// let arr = [1, 2, 3, "Harshit", 5];
// console.log(arr);
// Array Example
// let nameArray = ["Harshit", "Srija", "Sreya", "Rahul", "Nishant"];
// console.log(nameArray);

// index = position - 1
// console.log(nameArray[0]);

// print hello with name for all the users
// let sizeOfArray = nameArray.length;
// for (let i = 0; i < sizeOfArray; i++) {
//   console.log("hello " + nameArray[i]);
// }

// push
// pop
// concat
// filter*
// includes
// join
// length
// slice
// sort
// splice
// foreach*
// map*

// push
// let nameArray = ["Harshit", "Srija", "Sreya", "Rahul", "Nishant"];
// let addedName = nameArray.push("Kaushik");

// console.log(addedName);

// pop
// nameArray = ["Harshit", "Srija", "Sreya", "Rahul", "Nishant"];
// let lastNameInArr = nameArray.pop();
// console.log(lastNameInArr);

// concat
// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];

// let newArr = arr1.concat(arr2);
// console.log(newArr);
// console.log(arr1);  // not an inplace operation

// filter - will explain after function

// includes
// arr = [1, 2, 3, 4];
// let isPresent = arr.includes(5);
// console.log(isPresent);

// join
// arr = ["Today", "is", "a", "good", "day"];
// let sentence = arr.join(" ");
// console.log(sentence);

// string function -- not related to array
// let str = "I am Harshit";
// let myArr = str.split("a");
// console.log(myArr);

// length
// arr = ["Today", "is", "a", "good", "day"];
// let sizeOfArr = arr.length;
// console.log(sizeOfArr);

// slice
// let numArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sliceOfArr = numArr.slice(0, 5);
// console.log(sliceOfArr);

// sort - sorts the elements as strings in alphabetical and ascending order
// let numArr = [4, 1, 5, 40, 44, 0, 100];
// numArr.sort(); // inplace operation
// console.log(numArr);

// splice
// let arr = [1, 6, 4, 2];
// arr.splice(1, 2, 11, 12);
// console.log(arr);

// foreach - will explain after function
// map - will explain after function
