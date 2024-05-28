/** product: calculate the product of an array of numbers. */

function product(nums, id = 0) {
  if (id === nums.length) return 1;
  return nums[id] * product(nums, id + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, id = 0, long = 0) {
  if (id === words.length) return long;
  long = Math.max(words[id].length, long);
  return longest(words, id + 1, long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, id=0 , word="") {
  if(id >= str.length) return word
  word+=str[id]
  return everyOther(str, id+2, word)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, id = 0) 
{
  let leftId = id;
  let rightId = str.length - id - 1;
  if (leftId >= rightId) return true;
  if (str[leftId] !== str[rightId]) return false;
  return isPalindrome(str, id + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, id =0) {

  if (id === arr.length) return -1;
  if (arr[id] === val) return id;
  return findIndex(arr, val, id + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, id = 0, word="" ) {
  if (word.length === str.length) return word;
  word += str[str.length - 1 - id];
  return revString(str, id + 1, word);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) 
{
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val,  left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
