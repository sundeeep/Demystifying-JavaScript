const print = (prompt) => {
    console.log(prompt);
}

let count = 0;

function incement(){
    // let count = counter;
    let name = "Sandeep";
    count += 1;
    print(count);
}

print(count);     
incement();      
print(count);   

// print = 3; FIXME: Read about TypeError: Assignment to the Constant Variable 