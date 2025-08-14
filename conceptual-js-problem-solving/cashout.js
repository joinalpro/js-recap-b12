function cashOut(money){
    if(money < 0 || typeof money !== "number"){
        return 'Invalid'
    }
    let charge = money * 0.0175;
    let fixedCharge = charge.toFixed(2);
    let finalCharge = parseFloat(fixedCharge)
    return finalCharge;
}
console.log(cashOut(5));

