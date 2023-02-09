var print = (prompt) => {
    console.log(prompt);
}

let count = 0;

function incement(){
    count += 1;
    print(count);
}

print(count);
incement();
print(count);