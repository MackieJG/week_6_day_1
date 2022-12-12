// FUNCTION DECLARATION (NAMED FUNCTIONS)
function sayHello(greetingName) {
    return `Hello ${greetingName}!`;
}

var value = sayHello('Josh')
console.log(value);

// FUNCTION EXPRESSION
var add = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(add(1, 2));

// ARROW FUNCTIONS
var addArrowFunction = (firstNum, secondNum) => {
    return firstNum + secondNum;
}
var result = addArrowFunction(1,2);
console.log(result);

// FUNCTIONS SAME AS THIS

var addArrowFunction = (firstNum, secondNum) => firstNum + secondNum;

var result = addArrowFunction(1,2);
console.log(result);
