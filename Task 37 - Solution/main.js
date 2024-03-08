// Task 37 - Solution
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("you order a ".concat(size, " shirt that says ").concat(text));
}
make_shirt();
make_shirt('medium');
// different message
make_shirt('small', "I love road trips");
