"use strict";
const personalMovvieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovvieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');   
       while(personalMovvieDB.count == '' || personalMovvieDB.count == null || isNaN(personalMovvieDB.count)){
        personalMovvieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
       }
    },
    remeberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из просмотреных фильмов?', '').trim(),
                     b = prompt('Насколько оцениваете его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovvieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }    
        }
           
    },
    detectPersonalLevel: function(){
        if (personalMovvieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovvieDB.count >= 10 && personalMovvieDB.count < 30){
            console.log('Вы класический зритель');
        } else if (personalMovvieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden){
        if  (!hidden){
            console.log(personalMovvieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovvieDB.privat){
            personalMovvieDB.privat = false;
        } else{
            personalMovvieDB.privat = true;
        }
    },
   writeYourGeners: function(){
    for(let i = 1; i < 2; i++){
        // let gener =  prompt(`Ваш любимый жанр под номером ${i}`);

        // if (gener === '' || gener === null){
        //     console.log('Вы ввели неккоректные данные или не ввели их вообще');
        //     i--;
        // }else{
        //     personalMovvieDB.geners[i - 1] = gener;
        // }
        let gener =  prompt(`Введите ваши любимые жанры через запятую`).toLowerCase;
        if (gener === '' || gener === null){
            console.log('Вы ввели неккоректные данные или не ввели их вообще');
            i--;
        }else{
            personalMovvieDB.geners = gener.split(', ');
            personalMovvieDB.geners.sort();
        }
    } 

    personalMovvieDB.geners.forEach((item, i) =>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
}
};
