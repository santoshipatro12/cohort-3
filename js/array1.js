// Mutating vs non-mutating methods: push/pop/shift/unshift/splice/sort/reverse change the original array; slice/concat/map/filter return a new one.
// Reference behavior: let b = a just copies the reference, not the data — use [...a] (spread) to get a real independent copy.
// Loop indexing tricks: skipping indexes (i += 2), diagonal access (matrix[i][i]), and second-last (length - 2) all come from the same idea — index math relative to .length.

// --- Intermediate: Create an array of 5 favorite movies, print all values ---
// APPROACH: Store movies as strings in an array literal. Access each element
// using its index (0 to length-1) OR just loop through it.
let movies = ["Inception", "Interstellar", "Gladiator", "Titanic", "Avatar"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// --- Hard: Array with numbers, strings, boolean, and a nested array. Print only the nested array ---
// APPROACH: JS arrays can hold mixed data types. The nested array is just
// another element — access it by its index like any other value.
let mixedArr = [10, "hello", true, [1, 2, 3]];
console.log(mixedArr[3]); // [1, 2, 3]


/* ================= 2. INDEXING IN ARRAY ================= */

// --- Intermediate: Print first and last element ---
// APPROACH: First element is always index 0. Last element is at
// (array.length - 1) — using length keeps it dynamic for any array size.
let arr2 = [12, 45, 78, 90, 33];
console.log("First:", arr2[0]);
console.log("Last:", arr2[arr2.length - 1]);

// --- Hard: Swap second and second-last element ---
// APPROACH: "Second" = index 1. "Second-last" = index (length - 2).
// Use a temporary variable to hold one value while swapping, so it isn't lost.
let arr2b = [10, 20, 30, 40, 50, 60];
let secondIndex = 1;
let secondLastIndex = arr2b.length - 2;
let temp = arr2b[secondIndex];
arr2b[secondIndex] = arr2b[secondLastIndex];
arr2b[secondLastIndex] = temp;
console.log(arr2b); // [10, 50, 30, 40, 20, 60]


/* ================= 3. MULTI-DIMENSIONAL ARRAYS ================= */

// --- Intermediate: Print all first elements of inner arrays ---
// APPROACH: A 2D array is an array of arrays. Loop over the outer array,
// then access index [0] of each inner array (double indexing: arr[i][0]).
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < grid.length; i++) {
  console.log(grid[i][0]);
}

// --- Hard: Sum of diagonal elements in a 3x3 matrix ---
// APPROACH: In a square matrix, diagonal elements always have the SAME
// row and column index — i.e., matrix[i][i]. Loop once and add matrix[i][i].
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let diagonalSum = 0;
for (let i = 0; i < matrix.length; i++) {
  diagonalSum += matrix[i][i];
}
console.log("Diagonal Sum:", diagonalSum); // 1+5+9 = 15


/* ================= 4. length ================= */

// --- Intermediate: Total elements without counting manually ---
// APPROACH: Every array has a built-in .length property that auto-updates.
let arr4 = ["a", "b", "c", "d"];
console.log("Length:", arr4.length);

// --- Hard: Function to check if array length is even or odd ---
// APPROACH: Use the modulus operator (%). If length % 2 === 0, it's even,
// otherwise odd. Wrap this logic in a reusable function.
function checkLength(array) {
  return array.length % 2 === 0 ? "Even" : "Odd";
}
console.log(checkLength([1, 2, 3, 4]));    // Even
console.log(checkLength([1, 2, 3]));       // Odd


/* ================= 5. push() ================= */

// --- Intermediate: Add 3 new elements at the end ---
// APPROACH: push() adds elements to the END of an array and mutates
// the original array. Can pass multiple arguments at once.
let arr5 = [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5); // [1,2,3,4,5,6]

// --- Hard: Add elements dynamically inside loop from another array ---
// APPROACH: Loop through the source array and push each element one by
// one into the target array (this mimics how concat works internally).
let source = [10, 20, 30];
let target = [1, 2, 3];
for (let i = 0; i < source.length; i++) {
  target.push(source[i]);
}
console.log(target); // [1,2,3,10,20,30]


/* ================= 6. pop() ================= */

// --- Intermediate: Remove last element and print removed value ---
// APPROACH: pop() removes the LAST element AND returns it, so store the
// return value in a variable to know what was removed.
let arr6 = [1, 2, 3, 4];
let removed = arr6.pop();
console.log("Removed:", removed); // 4
console.log("Array now:", arr6);  // [1,2,3]

// --- Hard: Keep removing elements until array becomes empty ---
// APPROACH: Use a while loop that runs as long as array.length > 0,
// calling pop() each time. Loop naturally stops when length becomes 0.
let arr6b = [1, 2, 3, 4, 5];
while (arr6b.length > 0) {
  console.log("Removing:", arr6b.pop());
}
console.log("Final array:", arr6b); // []


/* ================= 7. unshift() ================= */

// --- Intermediate: Add one username at beginning ---
// APPROACH: unshift() adds element(s) to the START of the array and
// shifts existing elements to the right.
let users = ["Amit", "Priya"];
users.unshift("Rahul");
console.log(users); // ["Rahul","Amit","Priya"]

// --- Hard: Insert multiple elements at beginning without replacing existing ---
// APPROACH: unshift() can take multiple comma-separated arguments;
// all get added at the front IN ORDER, pushing old elements further right.
let arr7b = [4, 5, 6];
arr7b.unshift(1, 2, 3);
console.log(arr7b); // [1,2,3,4,5,6]


/* ================= 8. shift() ================= */

// --- Intermediate: Remove first element ---
// APPROACH: shift() removes and returns the FIRST element, shifting
// all remaining elements one position to the left.
let arr8 = [10, 20, 30];
let firstRemoved = arr8.shift();
console.log("Removed:", firstRemoved); // 10
console.log(arr8); // [20,30]

// --- Hard: Remove first element repeatedly until only 2 remain ---
// APPROACH: Use a while loop that continues as long as length > 2,
// calling shift() each iteration.
let arr8b = [1, 2, 3, 4, 5, 6];
while (arr8b.length > 2) {
  arr8b.shift();
}
console.log(arr8b); // [5,6]


/* ================= 9. splice() ================= */

// --- Intermediate: Remove 2 elements from middle ---
// APPROACH: splice(startIndex, deleteCount) removes deleteCount elements
// starting at startIndex, mutating the original array.
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 2); // start at index 2, remove 2 elements
console.log(arr9); // [1,2,5]

// --- Hard: Replace 3 middle elements with 5 new values ---
// APPROACH: splice(start, deleteCount, item1, item2, ...) can delete AND
// insert in one call — insertion values replace the deleted ones.
let arr9b = [1, 2, 3, 4, 5, 6, 7];
arr9b.splice(2, 3, "a", "b", "c", "d", "e"); // remove 3 from index 2, insert 5
console.log(arr9b); // [1,2,'a','b','c','d','e',6,7]


/* ================= 10. reverse() ================= */

// --- Intermediate: Reverse an array using method ---
// APPROACH: reverse() flips the order of elements in place.
let arr10 = [1, 2, 3, 4, 5];
arr10.reverse();
console.log(arr10); // [5,4,3,2,1]

// --- Hard: Reverse only first half of array ---
// APPROACH: reverse() can't target a portion, so do a MANUAL SWAP —
// swap element i with element (halfLength - 1 - i) using a temp variable,
// looping only up to the midpoint of the first half.
let arr10b = [1, 2, 3, 4, 5, 6];
let half = Math.floor(arr10b.length / 2); // first half = indices 0..2
for (let i = 0; i < Math.floor(half / 2); i++) {
  let t = arr10b[i];
  arr10b[i] = arr10b[half - 1 - i];
  arr10b[half - 1 - i] = t;
}
console.log(arr10b); // [3,2,1,4,5,6]


/* ================= 11. sort() ================= */

// --- Intermediate: Sort numbers ascending ---
// APPROACH: Default sort() treats items as strings (wrong for numbers),
// so pass a compare function: (a,b) => a-b sorts ascending numerically.
let nums11 = [40, 5, 100, 25, 1];
nums11.sort((a, b) => a - b);
console.log(nums11); // [1,5,25,40,100]

// --- Hard: Sort so even numbers come first, odd later ---
// APPROACH: Custom compare function returns a negative number to push
// "a" before "b". If a is even and b is odd, a should come first (-1).
let nums11b = [5, 2, 9, 4, 7, 6];
nums11b.sort((a, b) => (a % 2) - (b % 2));
console.log(nums11b); // evens first, e.g. [2,4,6,5,9,7]


/* ================= 12. slice() ================= */

// --- Intermediate: Extract first 4 elements into new array ---
// APPROACH: slice(start, end) returns a NEW array (doesn't mutate original),
// end index is exclusive. slice(0,4) gets indices 0-3.
let arr12 = [1, 2, 3, 4, 5, 6];
let firstFour = arr12.slice(0, 4);
console.log(firstFour); // [1,2,3,4]

// --- Hard: Copy excluding first and last element ---
// APPROACH: Start slicing from index 1 (skip first), end at length-1
// (slice's end is exclusive, so this automatically skips the last element too).
let arr12b = [1, 2, 3, 4, 5, 6];
let middleCopy = arr12b.slice(1, arr12b.length - 1);
console.log(middleCopy); // [2,3,4,5]


/* ================= 13. concat() ================= */

// --- Intermediate: Merge two arrays ---
// APPROACH: concat() joins arrays and returns a NEW array without
// modifying the originals.
let a13 = [1, 2, 3];
let b13 = [4, 5, 6];
let merged13 = a13.concat(b13);
console.log(merged13); // [1,2,3,4,5,6]

// --- Hard: Merge 3 arrays and remove duplicates ---
// APPROACH: Concat all three, then filter using includes() to keep only
// the FIRST occurrence of each value (checking indexOf === current index),
// or simpler: use a Set to auto-remove duplicates.
let x13 = [1, 2, 3];
let y13 = [3, 4, 5];
let z13 = [5, 6, 7];
let combined13 = x13.concat(y13, z13);
let unique13 = [...new Set(combined13)]; // Set removes duplicates automatically
console.log(unique13); // [1,2,3,4,5,6,7]


/* ================= 14. includes() ================= */

// --- Intermediate: Check if "apple" exists ---
// APPROACH: includes() returns a boolean — true if the value exists
// anywhere in the array, false otherwise.
let fruits14 = ["mango", "apple", "banana"];
console.log(fruits14.includes("apple")); // true

// --- Hard: Check if ALL elements of one array exist inside another ---
// APPROACH: Loop through the first array and use includes() to check
// each element against the second array. Use every() for a clean one-liner,
// or a flag variable with a for loop.
let arrA14 = ["a", "b", "c"];
let arrB14 = ["a", "b", "c", "d", "e"];
let allExist = arrA14.every(item => arrB14.includes(item));
console.log(allExist); // true


/* ================= 15. indexOf() ================= */

// --- Intermediate: Find index of "Rahul" ---
// APPROACH: indexOf() returns the position of the FIRST match, or -1
// if not found.
let names15 = ["Amit", "Rahul", "Priya"];
console.log(names15.indexOf("Rahul")); // 1

// --- Hard: Find all positions of repeated number 5 ---
// APPROACH: indexOf() alone only finds the first match. To find ALL
// positions, loop through the array manually and check each element,
// storing matching indexes in a results array.
let nums15 = [5, 2, 5, 8, 5, 9];
let positions = [];
for (let i = 0; i < nums15.length; i++) {
  if (nums15[i] === 5) {
    positions.push(i);
  }
}
console.log(positions); // [0,2,4]


/* ================= 16. join() ================= */

// --- Intermediate: Convert array into comma separated string ---
// APPROACH: join(",") combines all elements into one string using
// "," as the separator.
let arr16 = ["red", "green", "blue"];
console.log(arr16.join(",")); // "red,green,blue"

// --- Hard: Convert array into sentence format ---
// APPROACH: join(" ") uses a space as separator, which naturally reads
// like a sentence when elements are words.
let words16 = ["I", "love", "JavaScript", "arrays"];
console.log(words16.join(" ")); // "I love JavaScript arrays"


/* ================= 17. for loop ================= */

// --- Intermediate: Print all elements using loop ---
// APPROACH: Classic for loop from i=0 to i<length, accessing arr[i].
let arr17 = [10, 20, 30, 40];
for (let i = 0; i < arr17.length; i++) {
  console.log(arr17[i]);
}

// --- Hard: Print elements at only even indexes ---
// APPROACH: Instead of incrementing i by 1, increment by 2 (i += 2)
// so the loop only visits indexes 0, 2, 4...
let arr17b = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < arr17b.length; i += 2) {
  console.log(arr17b[i]);
}
// prints 10, 30, 50


/* ================= 18. for...of ================= */

// --- Intermediate: Print all values using for...of ---
// APPROACH: for...of directly gives you the VALUE of each element
// (not the index), simplifying iteration when index isn't needed.
let arr18 = ["a", "b", "c"];
for (let value of arr18) {
  console.log(value);
}

// --- Hard: Count vowels from array of characters ---
// APPROACH: Loop through characters with for...of, check each character
// against a set of vowels (using includes on a vowel string), increment
// a counter on match.
let chars18 = ["a", "b", "e", "x", "i", "o", "z", "u"];
let vowels = "aeiou";
let vowelCount = 0;
for (let ch of chars18) {
  if (vowels.includes(ch)) {
    vowelCount++;
  }
}
console.log("Vowel count:", vowelCount); // 5


/* ================= 19. REFERENCE BEHAVIOUR OF ARRAY ================= */

// --- Intermediate: Assign array to another variable and modify second ---
// APPROACH: Arrays are REFERENCE types in JS. Assigning arr2 = arr1 doesn't
// copy data — both variables point to the SAME array in memory. Modifying
// one affects the other.
let original19 = [1, 2, 3];
let copy19 = original19; // NOT a real copy, just another reference
copy19.push(4);
console.log("Original:", original19); // [1,2,3,4] -- changed too!
console.log("Copy:", copy19);         // [1,2,3,4]

// --- Hard: Create a TRUE copy so original doesn't change ---
// APPROACH: Use the spread operator (...) to create a brand-new array
// with copied values, breaking the reference link.
let original19b = [1, 2, 3];
let trueCopy19b = [...original19b]; // real independent copy
trueCopy19b.push(4);
console.log("Original:", original19b); // [1,2,3] -- unaffected
console.log("True Copy:", trueCopy19b); // [1,2,3,4]


/* ================= 20. SPREAD OPERATOR ================= */

// --- Intermediate: Copy array into new array ---
// APPROACH: [...array] unpacks all elements into a new array literal,
// creating an independent copy (same technique as 19-Hard).
let arr20 = [1, 2, 3];
let spreadCopy20 = [...arr20];
console.log(spreadCopy20); // [1,2,3]

// --- Hard: Merge arrays and add extra values in between ---
// APPROACH: Spread operator can be placed anywhere inside a new array
// literal, so you can interleave extra values between two spread arrays.
let first20 = [1, 2, 3];
let second20 = [7, 8, 9];
let merged20 = [...first20, 4, 5, 6, ...second20];
console.log(merged20); // [1,2,3,4,5,6,7,8,9]