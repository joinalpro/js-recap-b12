// ternary have three parts
// condition ? expressionIfTrue : expressionIfFalse

// const age = 22;

// age >= 18 ? console.log("old enough to vote") : console.log("next time");

let price = 2000;
const isLeader = true;

// if (isLeader === true){
//     console.log("you don't have to pay");
// }
// else {
//     price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100
// console.log(price);




price = isLeader === true ? 
    price > 1000 ? 
        price /2 : 0 : 
            price + 100;
console.log(price);