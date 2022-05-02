// function definition
// function name
function fn(){
    console.log("I am function");
    // optional return type
}

// function invocation
let rVal=fn();
// when you don't return anything from a fn()
// then it will return undefined
console.log("rVal from fn()",rVal);

// function with parameters
// no need to write let in function as it already knows 
console.log("\n");

function fnWithPar(a,b){
    console.log(a, " ", b);
    return "return value";
}

 fnWithPar(10,20);
 // 10,20

 let pVal = fnWithPar("Hello", 20);
 console.log(pVal);
//  in above case everything is returned in pVal -> console data as well as return value
// Hello 20
// return Value
