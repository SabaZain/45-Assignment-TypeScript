// Task 30 - Solution
var users = ["admin", "eric", "haseeb", "ali", "salman"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?"); // print message for admin
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    } // print message for other users
}
;
