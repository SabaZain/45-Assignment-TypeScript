// Task 17 - Solution
// (a) : Print invite only two people for dinner
let guests : string [] = ["Saima","Muskan","Fatima","Moeez","Mehak","Zeeshan"];
console.log("Due to limited space only two people can be invited for dinner.");
// (b) : print message of sorry to the guests who are no longer invited for the dinner
while(guests.length>2){const removeGuest = guests.pop();
console.log(`sorry, ${removeGuest}, you are no longerinvited to dinner.`)};
// (c) : print message to two guests who are still invited for dinner
guests.forEach((guest) => {console.log(`Dear ${guest}, you are still invited to the dinner.`)});
// (d) : removing last two names from list to have an empty list
guests.pop();
guests.pop();
console.log("Final guest list:" , guests);
