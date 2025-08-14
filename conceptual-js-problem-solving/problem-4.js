function compareNums (array1, array2){
    
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        return "Invalid"
    }

    let firstTotalNum = 0;
    for(let firstArray of array1){
        firstTotalNum = firstArray;
    }
    let secondTotalNum = 0;
    for(let secondArray of array2){
        secondTotalNum = secondArray;
    }
    if(firstTotalNum === secondTotalNum){
        return true;
    }else{
        return false;
    }
}

let a1 = [1, undefined, 4]
let b1 = [1, null, 4]

const result = compareNums(a1, b1)
console.log(result);
