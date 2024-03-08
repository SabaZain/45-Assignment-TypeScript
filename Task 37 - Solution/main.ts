// Task 37 - Solution
function make_shirt(size:string = `large` , text:string = "I love TypeScript"):void{
    console.log(`you order a ${size} shirt that says ${text}`)
}
make_shirt();
make_shirt('medium');
// different message
make_shirt('small', "I love road trips")