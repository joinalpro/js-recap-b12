const employees = [
    {name: 'asif', designation: 'manager', salary: 50000},
    {name: 'nasir', designation: 'developer', salary: 42000},
    {name: 'Omel', designation: 'seo expert', salary: 32000},
]

employees[0].name = 'ashraf'
console.log(employees);

// console.log(employees[1].salary);
// for(let i = 0; i < employees.length; i++){
//     console.log(employees[i]);
// }

// for ( const employee of employees){
    // console.log(employee.salary);
    // const person = employee;
    // const personInfo = person.name + ' ' + person.salary;
    // console.log(personInfo);
// }