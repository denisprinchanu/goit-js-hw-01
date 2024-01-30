

'use strict'



function getElementWidth(content, padding, border) {


    
    let totalContent = content + padding * 2 + border *2;
    
    return totalContent = `${totalContent}`;  
}


let orderOne = getElementWidth (50, 8, 4);
let  orderTwo = getElementWidth (60, 12, 8.5);
let  orderThree = getElementWidth (200, 0, 0);


console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200



// let content = "50px";
// let numerical = Number.parseFloat(value);