const salary = 24000
const isBCS = true;
const height = 61;

// if (salary > 20000 && height > 66) {
//     console.log("good patro");
// } 
// else {
//     console.log("onno patro dhekho");
// }

// if (salary >= 25000 || height > 72 || isBCS == true) {
//     console.log("bolo kobul");
// }
// else {
//     console.log("skip marriage");
// }

if (salary >= 25000 && height > 72 & isBCS == true) {
    console.log("bolo kobul");
}
else {
    console.log("skip marriage");
}
const hasCar = true;
// Complex Condition
if ((salary > 25000 && hasCar == true) || isBCS == true) {
    console.log("balo pola, biya diya dao..");
}
else {
    console.log("na thak..");
}