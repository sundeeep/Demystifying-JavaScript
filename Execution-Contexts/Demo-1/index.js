// let num = 10;

// function demo() {
       // console.log(num); //FIXME: ReferenceError: Cannot access 'num' before initialization
//     let num = 100;
//     console.log(num);
// }
// if(true){
//     var a = 1000;
// }
// demo();
// console.log(num);

if (true) {
    // FIXME: SyntaxError: Identifier 'a' has already been declared
    var a = 10;
    // let a = 1000;
    console.log("Block Level", a);
    let b = 100;
    console.log("Block level",b);
    const c = 1000;
    console.log("Block level", c);
}

console.log("Global Level",a);
// console.log(b);
// console.log(c);
// FIXME: ReferenceError: c is not defined {Declared in a block scope}
