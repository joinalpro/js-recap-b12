const school = {
    name: 'A.K. High School',
    class: [9, 10, 11, 12],
    events: ['science fair', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(school.unique.result.gpa);
school.events[1] = '16 December'
delete school.class;
console.log(school);
// console.log(school.events[1]);