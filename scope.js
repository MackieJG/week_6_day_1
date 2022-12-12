// var userName = 'John Doe';


// var secretsFunction = function () {
//     var pinCode = [0,0,0,0];
//     console.log('pin code inside function: ', pinCode, 'user was: ', userName);
// }

// secretsFunction();
// console.log(pinCode);

var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for (var name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }
    return filteredNames;
}

var students = ['Alice', 'bob', 'Arthur', 'Jane'];
var filteredStudents = filterNamesByFirstLetter(students, 'A');
console.log(filteredStudents);

let isItFive = function (number) {
    let result = false;

    if (number === 5) {
        let myOtherVar = 123;
        result = true;
    }

    return result;
}