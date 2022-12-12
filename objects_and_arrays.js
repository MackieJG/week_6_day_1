// var myArray = [];
var sports = ['football', 'rugby', 'mma'];

sports.push('snooker', 'tennis');
// var removedSport = sports.pop();

// sports.unshift('hockey');
// sports.shift();
// console.log(sports);

// var removedElements = sports.splice(1, 2)

// console.log(removedElements);
// console.log(sports);




// for ( var currentSport of sports) {
//     var upperCaseSport = currentSport.toUpperCase();
//     console.log(upperCaseSport);
// }

for ( var i = 0; i < sports.length; i++){
    console.log('counter was: ', i, 'sport was', sports[i]);
}