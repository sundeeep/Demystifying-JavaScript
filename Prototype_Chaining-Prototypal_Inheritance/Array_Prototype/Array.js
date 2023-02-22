Array.prototype.calculate = function(inputArr, callBackFunc){
    let outputArr = [];
    for(let index=0; index < inputArr.length; index++){
        outputArr.push(callBackFunc(inputArr[index]));
    }
    return outputArr;
}


const radius = [1, 2, 3, 4, 5];

console.log(radius);

const calculateArea = function(radius){
    return Math.PI * radius * radius;
}

const areaList = radius.calculate(radius, calculateArea);

console.log(areaList)
