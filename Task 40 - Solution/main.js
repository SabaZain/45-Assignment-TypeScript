// Task 40 - Solution
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("salman", "the last laugh");
console.log(album);
album = make_album("zain", "glass houses");
console.log(album);
album = make_album("ali", "hidden road");
console.log(album);
