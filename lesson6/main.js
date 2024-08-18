let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
///
let array = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of array) {
    console.log(string.toUpperCase());
}
///
let array2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string of array2) {
    console.log(string.toLowerCase());
}
///
let str = ' dirty string   ' ;
console.log(str.slice(1,13));
console.log(str.trim());

///
let text = 'Ревуть воли як ясла повні';
function strText (str){
    return str.split(' ');

}
console.log(strText (text));
///

let arrayNum = [10,8,-7,55,987,-1011,0,1050,0];
 const arrStr = arrayNum.map(element => element.toString() );
console.log(arrayNum);
console.log(arrStr);

///
let nums = [11,21,3];
function sortNums(array,direction){
    if(direction === 'ascending'){
       return  array.sort((a,b) => a-b);
    }
    if(direction === 'descending'){
       return array.sort((a,b) => b-a);
}
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
///
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newArr = coursesAndDurationArray.sort((elem1,elem2)=>{
     return elem2.monthDuration - elem1.monthDuration;
});
console.log(newArr);

let newArr2 = coursesAndDurationArray.filter((course)=>{
  return course.monthDuration > 5;
})
console.log(newArr2);

let newArr3 = coursesAndDurationArray.map((course, index)=>{
    course.id = index + 1 ;
    return course;
});
console.log(newArr3);
///
let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10','jack','queen','king','ace'];
let arr = [];
for (const suit of suits ){
    for (const value of values) {
        const card = ({cardSuit:suit,value:value});
        if( suit === 'heart' || suit === 'diamond' ){
            card.color = 'red'
        }else{
            card.color = 'black'
        }
        arr.push(card);
    }
}
console.log(arr);

// - знайти піковий туз
let diamond  = arr.filter((obj)=>{
    if( obj.cardSuit === 'diamond'&& obj.value === 'ace'){
        return obj;
    }

})
console.log(diamond);
///
// - всі шістки
let sixes = arr.filter((obj)=>{
    if(obj.value === '6'){
        return obj;
    }
})
console.log(sixes);
///
// - всі червоні карти
let red = arr.filter((obj)=>{
    if(obj.color === 'red'){
        return obj;
    }
})
console.log(red);
///
// - всі буби
let diamonds = arr.filter((obj)=>{
    if(obj.cardSuit === 'diamond'){
        return obj;
    }
})
console.log(diamonds);
///
// - всі трефи від 9 та більше
let others = arr.filter((obj)=>{
    if(obj.value > '9' || obj.value === '10'){
        return obj;
    }
})
console.log(others);


let reduce = arr.reduce((accumulator, card )=>{
    if(card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    } if(card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }if(card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    } if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card) ;
    }
    return accumulator;
    },{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]


});
console.log(reduce);
////////



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let arrCourses = [];
let arrCourses2 =[];
coursesArray.filter((course)=>{
  if(Array.isArray(course.modules)){
      for (const courseModules of course.modules) {
          if(courseModules === 'sass' ){
              arrCourses.push(course);
          }
          if(courseModules === 'docker'){
              arrCourses2.push(course);
          }
      }
  }
  return course;
})
console.log(arrCourses);
console.log(arrCourses2);