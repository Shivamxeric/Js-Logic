// Function to reverse a string word by word
function reverseWords(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
  }
  return reverse;
}
console.log(reverseWords('Shivam'));









// Function to reverse a string using built-in methods
function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('shivam'));









// Function to find the longest word in a given paragraph
function longestWords(str) {
  let longest = '';
  let words = str.split(' ');
  for (let word of words) {
      if (word.length > longest.length) {
          longest = word;
      }
  }
  return longest;
}
console.log(longestWords('I am the ghost of Uchiha'));









// Function to merge two words by alternating characters
function mergeTwoStr(str1, str2) {
  let strLength = Math.max(str1.length, str2.length);
  let merge = "";
  if (str1.length === str2.length) {
    for (let i = 0; i < strLength; i++) {
      if (i < str1.length) merge += str1[i];
      if (i < str2.length) merge += str2[i];
    }
  } else {
    return console.log("str1 not equal length to str2 ");
  }
  return merge;
}
console.log(mergeTwoStr("hello", "ooooworld"));









// Function to generate Fibonacci sequence
function fibonacciSequence(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr; // Returns full sequence instead of just the nth number
}

console.log(fibonacciSequence(6)); 








// Function to check if a given string is a palindrome
function palindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(palindrome("123"));









// Function to check if two words are anagrams
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(anagram('hello', 'olleh'));
console.log(anagram('hello', 'ollht'));









// Function to find the indices of two numbers that sum up to a target
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
  return false;
}
console.log(twoSum([1, 2, 3, 4, 5, 6], 9));









// Function to find the second highest number in an array
function secondHighest(arr) {
  arr.reverse();
  return arr[1];
}
console.log(secondHighest([1, 2, 3, 9, 8, 7, 6]));










// Function to remove duplicate numbers from an array
function removeDuplicateNumbers(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicateNumbers([1, 2, 2, 1, 3, 4, 5]));









// Function to rotate an array to the right by k steps
function rotateArray(nums, k) {
  let size = nums.length;
  k = k % size;
  const rotate = nums.splice(size - k, size);
  nums.unshift(...rotate);
  return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));









// Function to truncate a string after a given length
function truncate(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str;
}
console.log(truncate('Madara Itachi Obito Sasuke', 6));









// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(11));









// Function to return sum of all even numbers in an array
function sumEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log(sumEvenNumbers([3, 4, 5, 6, 7]));









// Function to count vowels in a string
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels('Hello World its nothing'));









// Function to find missing number in an array sequence
function findMissingNum(arr) {
  let n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;
  let currentSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - currentSum;
}
console.log(findMissingNum([1, 2, 3, 5]));









// Function to group anagrams together
function groupAnagrams(words) {
  let result = {};
  for (let word of words) {
      let sorted = word.split('').sort().join('');
      result[sorted] = result[sorted] || [];
      result[sorted].push(word);
  }
  return Object.values(result);
}
console.log(groupAnagrams(['listen', 'silent', 'enlist', 'rat', 'tar', 'art']));









//            high order functions                    //
function highOrderFunction(params) {
  return function(order){
      return params * order
  }
}
// console.log(highOrderFunction(3)(3));









// 1. Find the First Non-Repeating Character in a String

function firstNonRepeatingChar(str) {
  const nonRepeating = {};

  // Count occurrences of each character
  for (const char of str) {
    nonRepeating[char] = (nonRepeating[char] || 0) + 1;
  }

  // Find the first character that appears only once
  for (const char of str) {
    if (nonRepeating[char] === 1) return char;
  }
  
  return null;
}

console.log(firstNonRepeatingChar("mmsshhi"));









// 2. Move All Zeros to the End

function moveAllZero(arr) {
  const nonZero = arr.filter(num => num !== 0);
  const allZero = arr.length - nonZero.length;
  
  return [...nonZero, ...Array(allZero).fill(0)];
}

console.log(moveAllZero([1, 2, 0, 9, 0, 5]));









// 3. Find Duplicate Elements in an Array

function foundDuplicate(arr) {
  const seen = new Set();
  const duplicate = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) duplicate.add(num);
    else seen.add(num);
  }
  
  return [...duplicate];
}

console.log(foundDuplicate([1, 8, 8, 5, 9, 9, 5]));









// 4. Polyfill for Array.map()

Array.prototype.myMap = function (cb) {
  let temp = [];
  
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  
  return temp;
};

const numbers = [9, 8, 7, 6, 5];

const multiplyByThree = numbers.myMap(number => number * 3);
console.log(multiplyByThree);









// 5. Polyfill for Array.filter()

Array.prototype.myFilter = function (cb) {
  let temp = [];
  
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  
  return temp;
};

const nums = [9, 8, 7, 6, 5, 4, 3];
const greaterThanFive = nums.myFilter(num => num > 5);
console.log(greaterThanFive);









// 6. Polyfill for Array.reduce()

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  
  return accumulator;
};

const reduceNums = [9, 8, 7, 6, 5, 4, 3];
const sum = reduceNums.myReduce((acc, curr) => acc + curr);
console.log(sum);









// 7. Polyfill for Function.call()

const car = { color: 'Black', company: 'Bugatti' };

function purchaseCar(currency, price) {
  console.log(`I have purchased a ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("Not callable");
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car, "$", 987654321);









// 8. Polyfill for Function.apply()

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error("Not callable");
  if (!Array.isArray(args)) throw new TypeError("Arguments must be an array");
  
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car, ["$", 999999999]);









// 9. Polyfill for Function.bind()

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("Not callable");
  
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const boundPurchase = purchaseCar.myBind(car);
boundPurchase("$", 999999999);









// 10. Promise Polyfill

function PromisePolyfill(executor) {
  let onResolve, onReject, isFulfilled = false, isRejected = false, isCalled = false, value;
  
  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  
  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisePolyfill((resolve) => {
  setTimeout(() => resolve(2), 1000);
});

examplePromise.then(res => console.log(res));
