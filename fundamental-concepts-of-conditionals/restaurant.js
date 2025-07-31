const age = 77;
const price = 500;

if (age <= 12) {
    console.log("You can eat free");
}
else if (age >= 60){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log("You will not get free food");
}