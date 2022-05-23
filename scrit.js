let numberOfFilms;
function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');   
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
    }

     start();

const personalMovvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function remeberMyFilms(){
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
       
}

// remeberMyFilms();

function detectPersonalLevel(){
    if (personalMovvieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30){
        console.log('Вы класический зритель');
    } else if (personalMovvieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
     if  (!hidden){
         console.log(personalMovvieDB);
     }
}

showMyDB(personalMovvieDB.privat);

function writeYourGeners(){
    for(let i = 1; i <=3; i++){
        personalMovvieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    } 
}

writeYourGeners();

console.log(personalMovvieDB);