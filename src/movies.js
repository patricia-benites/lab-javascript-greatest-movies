// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const result = array.map((element)=>{
    return element.director;
  })
  return [...new Set(result)];;
}


// const movies = require('../src/data');


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const result = movies.filter((movie)=>{
    const isSteven = movie.director === "Steven Spielberg";
    const hasDrama = movie.genre.find((element) =>{
      return element === "Drama";
    })
    return isSteven === true && hasDrama === "Drama";
  })
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scoresArray = movies.map((movie)=>{
    if (movie.score === '' || !movie.score){
      return 0;
    } else {
      return movie.score
    }})
  
  const avgScores = scoresArray.reduce((accumulator, score)=>{
    
    return accumulator + score/movies.length;},0)

return Math.round(avgScores*100)/100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0;}

  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes('Drama') && typeof movie.score === 'number';
  });  
  
  const avgScores = dramaMovies.reduce((accumulator, score)=>{
    
    return accumulator + score.score/dramaMovies.length;
},0)

  return Math.round(avgScores*100)/100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newMovies = [...movies];
  const sortMovies = newMovies.sort((current,next)=>{
    if (current.year < next.year){
      return -1;
    } 
    if (current.year > next.year){
      return 1;
    } 
    if (current.year === next.year){
      if (current.title.localeCompare(next.title) === 0){
        return 0; 
      } else if (current.title.localeCompare(next.title) === -1){
          return -1;
        } else if (current.title.localeCompare(next.title) === 1){
          return 1;
        }
    }
  })
  return sortMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const newMovies = [...movies]
  const titles = newMovies.map((movie)=>{
          return movie.title                     
                               })
  
  const sortedTitles = titles.sort()
  
  return sortedTitles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const movies = [...array]
  movies.map((movie)=>{
    let endSliceHour = movie.duration.indexOf("h ");
    let hours = parseInt(movie.duration.slice(0,endSliceHour)) * 60;
    let endSliceMin =  movie.duration.indexOf("min");
    let min = parseInt(movie.duration.slice(endSliceHour+2, endSliceMin));
    return movie.duration = hours+min;
  })
  return movies;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
