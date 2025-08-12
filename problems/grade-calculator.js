// function calculateGrades(students){
//    function getLetterGrade(score){
//      if(score >= 90){
//         return "A";
//     }
//     else if(score >=80){
//         return "B";
//     } else if(score >= 70){
//         return "C";
//     } else if(score >= 60){
//         return "D";
//     } else {
//         return "F"
//     }
//     }
// // Now process the students array
// const result = [];
// for(let student of students){
//     if(student.scores.length >=3){
//     // calcualte average
//     let sum = 0;
//     for(let score of student.scores){
//         sum+= score;
//     }
//     let average = sum / student.scores.length

    
//     result.push({
//         name: student.name,
//         average: average,
//         grade: getLetterGrade(average)
//     })
// }
// }
//     return result
// }
// const allstudent = [
//   { name: "Alice", scores: [85, 92, 78, 88] },
//   { name: "Bob", scores: [76, 84] }, // Should be excluded
//   { name: "Charlie", scores: [95, 87, 91, 89, 93] }
// ];

// console.log(calculateGrades(allstudent,78));

// solution
function calculateGrades(students){
   function getLetterGrade(score){
     if(score >= 90){
        return "A";
    }
    else if(score >=80){
        return "B";
    } else if(score >= 70){
        return "C";
    } else if(score >= 60){
        return "D";
    } else {
        return "F"
    }
    }
// Now process the students array
const result = [];
for(let student of students){
    // calcualte average
    let sum = 0;
    for(let score of student.scores){
        sum+= score;
    }
    let average = sum / student.scores.length

    
    result.push({
        name: student.name,
        average: average,
        grade: getLetterGrade(average)
    })
}
    return result
}
const allstudent = [
  { name: "Alice", scores: [85, 92, 78, 88] },
  { name: "Bob", scores: [76, 84] }, // Should be excluded
  { name: "Charlie", scores: [95, 87, 91, 89, 93] }
];

console.log(calculateGrades(allstudent,78));