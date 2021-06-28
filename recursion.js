/** product: calculate the product of an array of numbers. */

function product(nums) {
  // BASE CASE
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, mostLetters = 0) {
  // BASE CASE: reach end of array of strings, return value of mostLetters
  if (words.length === 0) {
    return mostLetters;
  }
  if (words[0].length > mostLetters) {
    mostLetters = words[0].length;
  }
  return longest(words.slice(1), mostLetters);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  // BASE CASE: incrementing variable greater than length of string
  if (i >= str.length) {
    return newStr;
  }
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) {
    return -1;
  } 
  if (arr[i] === val) {
    return i;
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = "") {
  if (str.length === 0) {
    return newStr;
  }
  newStr += str[str.length - 1];
  return revString(str.slice(0, str.length - 1), newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
