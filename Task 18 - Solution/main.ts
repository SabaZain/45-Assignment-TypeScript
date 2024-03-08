// Task 18 - Solution
// (a) Store the locations in an array
let placesToVisit: string[] = ["Tokyo","Pakistan","America","China","Japan"];
// (b) Print the array in its original order
console.log("Original order:" , placesToVisit);
// (c) Print the array in its alphabetical order without modifying the actual list
console.log("Alphabetic order :" , [...placesToVisit].sort());
// (d) Show that array is still in its original order after sorting
console.log("Original order after sorting:" , placesToVisit);
// (e) Print reverse alphabetical order without changing order of original list
console.log("Reverse alphabetical order:" , [...placesToVisit].sort().reverse());
// (f) Show that array is still in its original order
console.log("Original order after reverse sorting:" , placesToVisit);
// (g) Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:" , placesToVisit);
// (h) Reverse the order of list again to show back to its original order
placesToVisit.reverse();
console.log("Back to original order:" , placesToVisit);
// (i) Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:" , placesToVisit);
// (j) Sort the array in reverse alphabetical order
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:" , placesToVisit);


