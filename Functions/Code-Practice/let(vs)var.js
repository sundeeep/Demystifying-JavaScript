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

/**
 * TODO: If we pass arguments to any Function, That Function will make a copy of that variable
 * TODO: and It takes as a parameter. and It's gonna be the local copy of that global argument.
 * TODO: So that we can't modify the Global variable. It's a good practise to pass an argument and take in 
 * TODO: as parameter and creates a new copy in the LOCAL EXECUTION CONTEXT in the CALLSTACK.
 */