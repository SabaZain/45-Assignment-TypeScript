// Task 24 - Solution
// (a) : test for equality and inequality with strings
let name_1 : string = "Saba";
let name_2 : string = "Saba Zain";
let name_3 : string = "miss Saba Zain";
if(name_1 == name_3){console.log("names are equal")
 } else {
console.log("names are not equal")
}
if(name_1 != name_2){
console.log("names are equal")
};
// (b) : test using lower case function
if(name_1 != name_3){
    console.log("names are equal")
}
// (c) numerical tests involving equality and inequality, greater than and less than, greater than or equal to,and less than or equal to
let age_1 : number = 18
let age_2 : number = 22
if(age_1 == 18){
    console.log("eligible for vote")
};
if(age_1 != 22){
   console.log("eligible for vote in older category")
};
if(age_1 <= age_2){
    console.log("younger") // less than
};
if(age_2 >= age_1){
console.log("older") // greater than
};
// (d) : tests using "and" and "or" operations
if(age_1 == 18 && age_2 == 22){
console.log("person is eligible for vote")
};
if(age_1 == 18 || age_2 != 22){
  console.log("person is eligible not for vote")
};
// (e) test whether item is in array
let country : string [] = ["Pakistan","India","Japan","China"];
if(country.includes("Pakistan")){
  console.log("Pakistan is in country list")
};
// (f) test whether item is not in a array
if(!country.includes("america")){
     console.log("america is not in country list")
};