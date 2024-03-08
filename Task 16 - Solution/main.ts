// Task 16 - Solution
let guestArr : string [] = ["Muskan","Ali","Mehak"];
let canNotAttend : string = "Ali";
let newGuest : string = "Moeez";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// (a) : Informing people to invite more guests as found bigger dinner table
guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I have invited more guests`));
// (b) : Add one new guest to the beginning of array
let guestBeg : string = "Saima";
guestArr.unshift(guestBeg);
console.log(guestArr);
// (c) : Add one new guest to the middle of array
let middleGuest : string = "Fatima";
let middleIndex = guestArr.length/2;
guestArr.splice(middleIndex,0,middleGuest);
console.log(guestArr);
// (d) : append() to add one new guest to the end of list
guestArr.push("Zeeshan");
console.log(guestArr);
// (e) : printing a new set of invitation messages, one for each person in list
guestArr.map((items) => console.log(`Dear ${items}, you are invited in the more guest list on dinner.`));