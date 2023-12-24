///Do the below programs in anonymous function & IIFE
console.log("kaviarasan JV");
//const console.log = (value) =>console.log(value);
console.log(`Do the below programs in anonymous function & IIFE
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
Return median of two sorted arrays of the same size.
Remove duplicates from an array
Rotate an array by k times
`);
///////////////////////////////////////////////////////////////////////
//Print odd numbers in an array
///////////////////////////////////////////////////////////////////////
(function () {
  let ar = [1, 2, 3, 4, 23, 45, 68, 1223];
  let oddnumbers = [];
  ar.forEach((number) => {
    if (number % 2 != 0) {
      oddnumbers.push(number);
    }
  });
  console.log("odd numbers from the array is", oddnumbers);
})();

///////////////////////////////////////////////////////////////////////
//Convert all the strings to title caps in a string array
///////////////////////////////////////////////////////////////////////
(function () {})();
let strar = ["kavi", "arasan", "eswaran"];
let strarcapital = [];
strar.forEach((str) => strarcapital.push(str.toLocaleUpperCase()));
console.log("capitalized array is", strarcapital);
///////////////////////////////////////////////////////////////////////
//////Sum of all numbers in an array
///////////////////////////////////////////////////////////////////////
(function () {
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
})();

///////////////////////////////////////////////////////////////////////
//////Return all the prime numbers in an array
///////////////////////////////////////////////////////////////////////
(function () {
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
})();

///////////////////////////////////////////////////////////////////////
//////Return all the palindromes in an array
///////////////////////////////////////////////////////////////////////

(function () {
  let ar4 = [
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
  let palindromenumbers = [];
  const palindromefunction = (str) => {
    console.log(str);
    let j = str.length - 1;
    for (i = 0; i <= str.length / 2; i++) {
      if (i === j) {
        palindromenumbers.push(str);
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
  ar4.length > 0
    ? ar4.map((element) => palindromefunction(element))
    : console.log("array is empty");
  console.log(
    "palindrome numbers array is",
    palindromenumbers.sort((a, b) => a - b)
  );
})();
///////////////////////////////////////////////////////////////////////
//////Return median of two sorted arrays of the same size.
///////////////////////////////////////////////////////////////////////
(function () {
  let ar5 = [10, 20, 30];
  let ar6 = [1000, 40, 50, 60, 1, 2];

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
        (ar7[Math.ceil(ar7.length / 2 - 1)] + ar7[Math.ceil(ar7.length / 2)]) /
          2
      );
    }
  };
  (ar5.length && ar6.length) > 0
    ? medianfunction()
    : console.log("array is empty");
})();

///////////////////////////////////////////////////////////////////////
//////Remove duplicates from an array
///////////////////////////////////////////////////////////////////////
(function () {
  let ar8 = [10, 20, 30, 20, 20];
  ar8.length > 0
    ? console.log("Array after removing the duplicates is", [...new Set(ar8)])
    : console.log("array is empty");
})();
///////////////////////////////////////////////////////////////////////
//////Rotate an array by k times
///////////////////////////////////////////////////////////////////////

(function () {
  let ar10 = [1, 2, 3, 4, 10, 23];
  k = 4;
  console.log("array before rotation is ", ar10);
  for (i = 0; i < k; i++) {
    ar10.unshift(ar10.pop());
  }
  console.log("array rotated k times are ", ar10);
})();
