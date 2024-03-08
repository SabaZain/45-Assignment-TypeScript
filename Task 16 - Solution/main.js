// Task 16 - Solution
var guestArr = ["Muskan", "Ali", "Mehak"];
var canNotAttend = "Ali";
var newGuest = "Moeez";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// (a) : Informing people to invite more guests as found bigger dinner table
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", I found a bigger dinner table so I have invited more guests")); });
// (b) : Add one new guest to the beginning of array
var guestBeg = "Saima";
guestArr.unshift(guestBeg);
console.log(guestArr);
// (c) : Add one new guest to the middle of array
var middleGuest = "Fatima";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// (d) : append() to add one new guest to the end of list
guestArr.push("Zeeshan");
console.log(guestArr);
// (e) : printing a new set of invitation messages, one for each person in list
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited in the more guest list on dinner.")); });
