
// 1.

function sum() {
    var totalof = 0;

    for ( var number of numbers) {
        totalof += number;
    }
    return totalof;
}
var numbers = [1,2,3,4,5,6];
var total = sum(numbers);
console.log(total);






function addArray(array) {
    var total = 0;

    for (var singleNumber of array) {
        total += singleNumber;
    }
    return total;
}

var nums = [1,2,3,4];
console.log(addArray(nums));


// 2.

var stringCheck = function(string, object) {
    for (var key in object) 
        if (key === string) {
            return true;
        }
        return false;
    }

    var person = {
        name: 'Ben',
        color: 'green'
    };

    var key = 'name';
    var wasPresent = stringCheck(key, person);
    console.log(wasPresent)
    




