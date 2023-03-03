// TODO: Spread Operator in JS Arrays

// const array = [2,4,6,8,10];
// const evenArray = [...array, 12];
// console.log(evenArray);

let todos = ["I will wake up", "I will brush", "I will drink milk"];
console.log("Old Todos: ", todos)

let todo = "I will start practicing react";

const setTodos = () => {
    todos = [...todos, todo]
    console.log("New Todos: " ,todos)
}

setTodos();