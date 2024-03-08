// Task 44 - Solution
function sandwich(...items:string[]):void{
    console.log("sandwich order:")
    for(let i=0; i<items.length; i++){
        console.log(`_ ${items[i]}`)
    }
}
console.log("Enjoy your sandwich Saba Zain")
sandwich('chicken','capsicum','tomato')
sandwich('beef','tomato')
sandwich('garlic chicken','cheese')