// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge: function() {
        this.age++;
    }
};
console.log(person.getFullName());
person.incrementAge();
console.log(person.age);

function deepCopy(obj){
    if (obj === null || obj === undefined) {
        return obj;
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }
    if(obj){
        let itemFunction = [];
        for (const key in obj) {
            if( typeof obj[key] === 'function'){
                let functionCopy = obj[key].bind({});
                itemFunction.push({functionCopy, key, });
                console.log(functionCopy);
                console.log(itemFunction);
            }
        }
        let json = JSON.stringify(obj);
        let parse = JSON.parse(json);
        for (const elem of itemFunction) {
            parse[elem.key]= elem.functionCopy;
        }
        console.log(itemFunction);
        return parse;
    }

}
console.log(deepCopy(person));
console.log(person.getFullName());
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newArray = coursesAndDurationArray.map((course, index)=>({...course,index:index+1,}));
console.log(newArray);
console.log(coursesAndDurationArray);

