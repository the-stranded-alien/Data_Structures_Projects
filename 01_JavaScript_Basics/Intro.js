// let a = 10;
// console.log(a)
// let b = [1,2,3,4,5];
// console.log(b)
// console.log("Hello World")


c = 20;           // Global Variable
var d = 30;       // Function Scope  
let e = 50;       // Block Scope

function fun() {
    let a = 5;
    if (a==5) {
        b = 10;
        console.log("Inside", b);
    }
    console.log("Outside", b);
}

// Function Hoisting

// square_root(10);
// sqrt_n(10);

function square_root(n) {
    console.log("In First Sqrt Function")
    return;
}

var sqrt_n = function() {
    console.log("In Second Sqrt Function")
    return; 
}

square_root(10);
sqrt_n(10);


