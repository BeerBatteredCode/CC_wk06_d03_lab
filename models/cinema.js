const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const titlesFound = (film) => {
    return film.title;
  };
  const result = this.films.map( titlesFound );
  return result;
};

Cinema.prototype.findByTitle = function(title){
  const result = this.films.filter( (film) => {
    if ( film.title === title ){
      return true;
    };
  });
  return result;
};

Cinema.prototype.findByGenre = function(genre){
  const result = this.films.filter( (film) => {
    if ( film.genre === genre ){
      return true;
    };
  });
  return result;
};

Cinema.prototype.findByYear = function(year){
  const result = this.films.filter( (film) => {
    if ( film.year === year ){
      return true;
    };
  });
  if (result.length < 1){
    return false
  } else {
    return true
  };
};

Cinema.prototype.checkFilmLength = function(duration){
  const result = this.films.filter( (film) => {
    if ( film.duration > duration ){
      return true;
    };
  });
  if (result.length === 5){
    return true
  } else {
    return false
  };
};

Cinema.prototype.totalRunTime = function(){
  let filmLengths = this.films.map( (film) => {
    return film.length;
  });
  let total = filmLengths.reduce( (sum, num) => {
    return sum + num;
  }, 0);
  return total;
};




module.exports = Cinema;
