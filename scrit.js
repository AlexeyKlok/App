const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Один из просмотреных фильмов?', ''),
    b = prompt('Насколько оцениваете его?', ''),
    c = prompt('Один из просмотреных фильмов?', ''),
    d = prompt('Насколько оцениваете его?', '');

personalMovvieDB.movies[a] = b;
personalMovvieDB.movies[c] = d;

console.log(personalMovvieDB);