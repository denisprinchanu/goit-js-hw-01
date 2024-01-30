

'use strict'



function getShippingMessage(country, price, deliveryFee) {

    let totalPrice = price + deliveryFee;
    return totalPrice = `Shipping to ${country} will cost ${totalPrice} credits`;  
}

// const orderOne = getShippingMessage("Australia", 120, 50);
// const  orderTwo = getShippingMessage("Germany", 80, 20)
// const  orderThree = getShippingMessage("Sweden", 100, 20);



console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
