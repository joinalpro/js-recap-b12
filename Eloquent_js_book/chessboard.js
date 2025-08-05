var size = 8;
var board = "";
for (let i = 0; i < size; i++){
    for (let a = 0; a < size; a++){
        if ((i + a) % 2 == 0){
            board+= " "; 
        }else {
            board += "#"
        }
    }
    board += "\n";
}
console.log(board);