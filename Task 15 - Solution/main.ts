// Task 15 - Solution
// (a) : cannot attend
let guestArr : string [] = ["Sana","Ali","Mehak"];
let canNotAttend : string = "Sana";
console.log (canNotAttend + " " + "cannot attend the dinner.");
// (b) : new guest
let newGuest : string = "Muskan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// (c) : second set of invitation messages
guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner`));
