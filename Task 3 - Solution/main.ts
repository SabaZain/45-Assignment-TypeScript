// Task 3 - Solution
let personName : string = "Saba Zain";
// In lowercase
console.log("lowercase:" , personName.toLowerCase());
// In uppercase
console.log("uppercase:" , personName.toUpperCase());
// In titlecase
console.log("titlecase:" , personName.replace(/\b\w/g, c=> c.toUpperCase()));