// Task 15 - Solution
// (a) : cannot attend
var guestArr = ["Sana", "Ali", "Mehak"];
var canNotAttend = "Sana";
console.log (canNotAttend + " " + "cannot attend the dinner.");
// (b) : new guest
var newGuest = "Muskan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// (c) : second set of invitation messages
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner")); });
