function sumOfArray(arr){
    let sum = 0;
    if(Array.isArray(arr) == false){
        return 'Invalid';
    }
    for(let num of arr){
        if( typeof num !== "number"){
            return "Invalid"
        }
        sum+= num;
    }
    return sum;
}

let result = sumOfArray([1, 2, 'a'])
console.log(result);