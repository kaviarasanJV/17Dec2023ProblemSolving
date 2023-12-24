// Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array

console.log("kaviarasan JV");
const log = (value) => console.log(value);
log(`Do the below programs in arrow functions.
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
`);
///////////////////////////////////////////////////////////////////////
//Print odd numbers in an array
///////////////////////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 23, 45, 68, 1223];
let oddnumbersarr = [];
arr.forEach((number) => {
  if (number % 2 != 0) {
    oddnumbersarr.push(number);
  }
});
console.log("odd numbers from the array is", oddnumbersarr);
///////////////////////////////////////////////////////////////////////
//Convert all the strings to title caps in a string array
///////////////////////////////////////////////////////////////////////
let strarray = ["kavi", "arasan", "eswaran"];
let strarraycapital = [];
strarray.forEach((str) => strarraycapital.push(str.toLocaleUpperCase()));
console.log("capitalized array is", strarraycapital);
///////////////////////////////////////////////////////////////////////
//////Sum of all numbers in an array
///////////////////////////////////////////////////////////////////////
let ar2 = [1, 2, 3, 4, 10, 23];
let sumofarray;

const sumfunction = () => {
  sumofarray = 0;
  ar2.map((element) => {
    sumofarray += element;
  });
};
ar2.length > 0 ? sumfunction() : console.log("array is empty");
console.log("sum of the array is", sumofarray);
///////////////////////////////////////////////////////////////////////
//////Return all the prime numbers in an array
///////////////////////////////////////////////////////////////////////
let ar3 = [1, 2, 3, 4, 10, 17, 23, 100, 101, -10, 0, 5];
let primenumbers = [];
const primefunction = (num) => {
  if (num <= 0 && num === 1) {
    return;
  } else if (num > 1) {
    for (i = 2; i <= num; i++) {
      if (num === i) primenumbers.push(num);
      if (num % i === 0) break;
    }
  }
};
ar3.length > 0
  ? ar3.map((element) => primefunction(element))
  : console.log("array is empty");
console.log(
  "prime numbers array is",
  primenumbers.sort((a, b) => a - b)
);

///////////////////////////////////////////////////////////////////////
//////Return all the palindromes in an array
///////////////////////////////////////////////////////////////////////
let array4 = [
  "kavi",
  "malayalam",
  "tamil",
  "2002",
  "*%^%*",
  "111",
  "20002",
  "a",
  "aba",
];
let palindromenumbersarray4 = [];
const palindromefunctionarray4 = (str) => {
  console.log(str);
  let j = str.length - 1;
  for (i = 0; i <= str.length / 2; i++) {
    if (i === j) {
      palindromenumbersarray4.push(str);
      return;
    } else {
      if (str[i] === str[j]) {
        j--;
        continue;
      } else break;
    }
  }
  return;
};
array4.length > 0
  ? array4.map((element) => palindromefunctionarray4(element))
  : console.log("array is empty");
console.log(
  "palindrome numbers array is",
  palindromenumbersarray4.sort((a, b) => a - b)
);

///////////////////////////////////////////////////////////////////////
//////Return median of two sorted arrays of the same size.
///////////////////////////////////////////////////////////////////////
let ar5 = [10, 20, 30];
let ar6 = [1000, 40, 50, 60, 1, 2];
let medianof2arrays;
const medianfunction = () => {
  let ar7 = [...ar5, ...ar6].sort((a, b) => a - b);
  if (ar7.length % 2 != 0) {
    console.log(
      "Median of 2 number arrays(odd) is",
      ar7[Math.ceil(ar7.length / 2)]
    );
  } else {
    console.log(
      "Median of 2 number arrays(even) is",
      (ar7[Math.ceil(ar7.length / 2 - 1)] + ar7[Math.ceil(ar7.length / 2)]) / 2
    );
  }
};
(ar5.length && ar6.length) > 0
  ? medianfunction()
  : console.log("array is empty");

///////////////////////////////////////////////////////////////////////
//////Remove duplicates from an array
///////////////////////////////////////////////////////////////////////
let array8 = [10, 20, 30, 20, 20];
array8.length > 0
  ? console.log("Array after removing the duplicates is", [...new Set(array8)])
  : console.log("array is empty");
///////////////////////////////////////////////////////////////////////
//////Rotate an array by k times
///////////////////////////////////////////////////////////////////////
let ar9 = [1, 2, 3, 4, 10, 23];
k = 4;
const rotatebyktimesfunction = (k) => {
  console.log("array before rotation is ", ar9);
  for (i = 0; i < k; i++) {
    ar9.unshift(ar9.pop());
  }
  console.log("array rotated k times are ", ar9);
};
ar9.length > 0 ? rotatebyktimesfunction(k) : console.log("array is empty");
////////////////////////////////////////////////
