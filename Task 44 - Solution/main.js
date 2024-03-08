// Task 44 - Solution
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("_ ".concat(items[i]));
    }
}
console.log("Enjoy your sandwich Saba Zain");
sandwich('chicken', 'capsicum', 'tomato');
sandwich('beef', 'tomato');
sandwich('garlic chicken', 'cheese');
