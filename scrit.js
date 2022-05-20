const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('Один из просмотреных фильмов?', ''),
             b = prompt('Насколько оцениваете его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovvieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }    
}

if (personalMovvieDB.count < 10){
    console.log('sad');
} else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30){
    console.log('ok');
} else if (personalMovvieDB.count >= 30){
    console.log('good');
} else {
    console.log('error');
}

console.log(personalMovvieDB);