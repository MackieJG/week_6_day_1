var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: 'Spanish',
};
movie.cast = ['James Stewart', 'Donna Reed'];
movie['subtitle-language'] = 'French';
var keyName = 'cast';





// movie.ratings = {
//     critic: 94,
//     audience: 95
// }
// // console.log(movie['ratings']['critic']);

// for (var key in movie) {
//     console.log('key was: ', key, ' value was: ', movie[key]);
//     console.log(`key was: ${key} value was: ${movie[key]}`)
// } 

var movieKeys = Object.keys(movie);
console.log(movieKeys);
