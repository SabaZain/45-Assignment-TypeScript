// Task 43 - Solution
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician:string[]=["ali","zeeshan","zaid"]
//show_magicians(magician)
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { //i stand for index string
        magicians[i] = magicians[i] + " " + 'the Great';
    }
}
//const magicians2:string[]=["ali","zeeshan","zaid"];
//make_great(magicians2)
//show_magicians(magicians2);
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " " + "the Great");
    }
    return greatMagicians;
}
var magicians3 = ["ali", "zeeshan", "zaid"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
