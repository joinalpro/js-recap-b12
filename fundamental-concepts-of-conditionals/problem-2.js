// Calculate the Body Mass Index (BMI)

const bmi = 30;

if (bmi < 18.5){
    console.log("you are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.5){
    console.log("You are normal");
}
else if (bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight");
}
else {
    console.log("you are obese");
}