// Task 30 - Solution
let users : string [] = ["admin","eric","haseeb","ali","salman"];

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?") // print message for admin
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    } // print message for other users
};