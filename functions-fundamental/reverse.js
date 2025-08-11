// const numbers = [12, 34, 56, 78];
// // console.log(numbers.reverse());


// let reverse = [];

// for( num of numbers){
//     reverse.unshift(num)
//     console.log(reverse);
//     // console.log(num);
// }

// // console.log(numbers);


const numbers = [12, 34, 56, 78];

const reversed = [];
for (let i = 0; i < numbers.length; i++){
    reversed.unshift(numbers[i])
}
console.log(reversed);