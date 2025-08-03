
// for (let num = 0; num <= 12; num++) {
//     console.log(num);
// }

// break statement

// for (let current = 20; ;current = current + 1) {
//     if (current % 7 == 0){
//         console.log(current);
//         break
//     }
// }

// switch

// switch (prompt("What is the weather like?")){
//     case "rainy":
//         console.log("Remeber to bring an umbrella.");
//         break;
//     case "sunny":
//         console.log("Dress lightly");
//         // break
//     case "cloudy":
//         console.log("Go outside");
//         break;
//     default:
//         console.log("Unknown weather type!");
//         break;
// }

let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("large");
}