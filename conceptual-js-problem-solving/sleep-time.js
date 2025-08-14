// function calculateSleepTime(times){
// let sleepTime = 3700;
// let hour = Math.floor(sleepTime / 3600);
// console.log( hour);
// }

// calculateSleepTime()


let sleepTime = 3700;
let hour = Math.floor(sleepTime / 3600);
let remaining = sleepTime % 3600;
// console.log(remaining);
let minute = Math.floor(remaining / 60);
// console.log(minute);
remaining = remaining % 60;
console.log(remaining);