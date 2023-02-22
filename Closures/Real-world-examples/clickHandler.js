const changeBG = document.querySelector(".ChangeBG");

// changeBG.addEventListener("", ()=>{
//     document.body.style.backgroundColor = "green"; 
// }); //This will run perfectly because we are giving the call back function to the `addEventListener` which takes care of runninf this call back function.
 //By the way, addEventListener is the Higher Ordeer Function, which accepts two parameters, 1. Event and 2. Call Back Function.


// changeBG.addEventListener("click", changeBGHandler()); //already invoked, so return the function instead of returning the logic on function invocation.

// function changeBGHandler(){
//     document.body.style.backgroundColor = "green";
// }

// TODO: Use Closures to do the Production Level Stuff in this onClick Handlers.

// changeBG.addEventListener('click', changeBGHandler("yellow"));


// TODO: Switch the Button Behaviour
// let BGChanged = false;
// function changeBGHandler(){

//     if(BGChanged){
//         document.body.style.backgroundColor = "";
//         changeBG.innerText = "Change the BG of Body";
//         BGChanged = false;
//         return;
//     }

//     document.body.style.backgroundColor = 'lightcoral';
//     changeBG.innerText = "Revert Back";
//     BGChanged = true;

// }


// TODO: DO NOT DO THIS , the function will be invoked immediately and BG will be changed
// FIXME: onclick accepts only the call back functions, we can't give them / return the direct business logic.

// changeBG.onclick = changeBGHandler();

// function changeBGHandler(){
//     document.body.style.backgroundColor = "lightcoral";
// }

// TODO: Correction will be: Pass the call the call back function / assign the call back function to the `onclick` property.
changeBG.onclick = changeBGHandler();

function changeBGHandler(){
    return ()=>{
        document.body.style.backgroundColor = 'lightcoral';
    }

}