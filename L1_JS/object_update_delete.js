// it is a non primitive datatype that is used to represent anything

// empty object creation
// let obj = {

// };
// object is collection of Key:value pair
// key : string or number and value : any valid js  datatype

let cap={
    // cap is an object
    firstName:"Steve" ,
    "last Name":"Rogers",
    friends:["Tony","Peter","Bruce"],
    address:{
        city:"manhattan",
        state:"New york"
    },
    age: 33,
    isAvenger:true
}
// print
console.log(cap);
console.log(cap.firstName);
console.log(cap.address.city);
console.log(cap.friends[1]);


// one more method to get value
// this method can be used normally but it is compulsory when 
// there is space between key and in this case key should be in double quotes
let varName = "firstName";
console.log(cap[varName]);
varName="last Name";
console.log(cap[varName]);


// update and add
delete cap.friends;
cap.movies = 
["winter soldier","Thor","Captain America"];
let key = "comp"
cap[key]="DCU"

// update
cap.isAvenger = false;
console.log(cap);
// GAURAV SHARMA