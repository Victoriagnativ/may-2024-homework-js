let array = ['one','two','tree','four','five','six','seven','eight','nine','ten'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
//
let book1 = {
    title:'White Fang',
    pageCount: 300,
    genre:'adventure',
    authors:[ 'Jack London','79']
}
let book2 = {
    title:'Harry Potter',
    pageCount: 500,
    genre:'fantasy',
    authors:[ 'Joanne Rowling','59']
}
let book3 = {
    title:'City of girls',
    pageCount: 400,
    genre:'drama',
    authors:[ 'Elizabeth Gilbert','55']
}
//

let arrayUser = [
    {name:'Ann',username:'AnnUser',password:1111},
    {name:'Victoria',username:'VictoriaUser',password:2222},
    {name:'Marry',username:'MarryUser',password:3333},
    {name:'Shon',username:'ShonUser',password:4444},
    {name:'Yana',username:'YanaUser',password:5555},
    {name:'Sona',username:'SonaUser',password:6666},
    {name:'Luke',username:'LukeUser',password:7777},
    {name:'Ola',username:'OlaUser',password:8888},
    {name:'Gala',username:'GalaUser',password:9999},
    {name:'Ann',username:'AnnUser',password:1010}
]
console.log(arrayUser[0].password);
console.log(arrayUser[1].password);
console.log(arrayUser[2].password);
console.log(arrayUser[3].password);
console.log(arrayUser[4].password);
console.log(arrayUser[5].password);
console.log(arrayUser[6].password);
console.log(arrayUser[7].password);
console.log(arrayUser[8].password);
console.log(arrayUser[9].password);
//

let weather = [
    {day:1,morning:10,afternoon:15,night:25},
    {day:2,morning:12,afternoon:16,night:29},
    {day:3,morning:9,afternoon:15,night:30},
    {day:4,morning:8,afternoon:19,night:26},
    {day:5,morning:15,afternoon:20,night:30},
    {day:6,morning:11,afternoon:18,night:22},
    {day:7,morning:14,afternoon:16,night:28},
]
console.log(weather);
//


let x = 1;
if(x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}
//
let time = 46;
if(time<=15){
    console.log('чверть 1')
}else if(time<=30) {
    console.log('чверть 2')
}else if(time<=45){
    console.log('чверть 3')
}else{
    console.log('чверть 4')
}
//


let day = 31;
if(day<=10){
    console.log('декада 1')
}else if(day<=20) {
    console.log('декада 2')
}else{
    console.log('декада 3')
}
//


let dayWeek = 7;
switch (dayWeek){
    case 1:
        console.log('do homework')
        break;
    case 2:
        console.log('washing')
        break;
    case 3:
        console.log('cooking')
        break;
    case 4:
        console.log('riding')
        break;
    case 5:
        console.log('running')
        break;
    case 6:
        console.log('jumping')
        break;
    case 7:
        console.log('learning')
        break;
    default:
        console.log('do nothing')
}
//


let a = 30;
let b = 10;
if(a>b){
    console.log(a)
}else if(a<b){
    console.log(b)
}else{
    console.log('рівні')
}
//


let variable = 0;
if( variable){
    if (typeof variable === 'number') {
        console.log('Змінна є числом');
    } else if(typeof variable === 'string') {
        console.log('Змінна є строка');
    }else{
        console.log('інший вид');
    }
}else{
    variable = 'default';
    console.log(variable)
}
//


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log('super')
}if(coursesAndDurationArray[1].monthDuration>5){
    console.log(`${coursesAndDurationArray[1].title} - Супер`);
}if(coursesAndDurationArray[2].monthDuration>5){
    console.log(`${coursesAndDurationArray[2].title} - Супер`);
}if(coursesAndDurationArray[3].monthDuration>5){
    console.log('super')
}if(coursesAndDurationArray[4].monthDuration>5){
    console.log(`${coursesAndDurationArray[4].title} - Супер`);
}if(coursesAndDurationArray[5].monthDuration>5){
    console.log('super')
}