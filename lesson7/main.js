// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
}
let array = [
    new User(1,'Ola','Nkj', 'name.one@gmail.com', '2239493439'),
    new User(2,'Max','Nmm', 'name.two@gmail.com', '2239456565'),
    new User(3,'Vika','Mjbdhcb', 'name.three@gmail.com', '1239493439'),
    new User(4,'Yana','Kkdk', 'name.four@gmail.com', '3239493439'),
    new User(5,'Yla','Jkme', 'name.five@gmail.com', '4239493439'),
    new User(6,'Andriy','Kde', 'name.six@gmail.com', '5239493439'),
    new User(7,'Serhii','Xnjde', 'name.seven@gmail.com', '6239493439'),
    new User(8,'Tana','Agyde', 'name.eight@gmail.com', '7239493439'),
    new User(9,'Sona','Ljjde', 'name.nine@gmail.com', '8239493439'),
    new User(10,'Ivan','Fujdide', 'name.ten@gmail.com', '9239493439')

];
console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let newFilter = array.filter((user)=>{
    return user.id % 2 === 0;
})
console.log(newFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let newSort = array.sort((user1,user2) =>{
    return user2.id - user1.id;
})
console.log(newSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class  SuperClient extends User{
    constructor( id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone)
        this.order = order;
    }
}
let array1 = [
    new SuperClient(1,'Ola','Nkj', 'name.one@gmail.com', '2239493439',11),
    new SuperClient(2,'Max','Nmm', 'name.two@gmail.com', '2239456565',21),
    new SuperClient(3,'Vika','Mjbdhcb', 'name.three@gmail.com', '1239493439',32),
    new SuperClient(4,'Yana','Kkdk', 'name.four@gmail.com', '3239493439',41),
    new SuperClient(5,'Yla','Jkme', 'name.five@gmail.com', '4239493439',15),
    new SuperClient(6,'Andriy','Kde', 'name.six@gmail.com', '5239493439',26),
    new SuperClient(7,'Serhii','Xnjde', 'name.seven@gmail.com', '6239493439',57),
    new SuperClient(8,'Tana','Agyde', 'name.eight@gmail.com', '7239493439',68),
    new SuperClient(9,'Sona','Ljjde', 'name.nine@gmail.com', '8239493439',91),
    new SuperClient(10,'Ivan','Fujdide', 'name.ten@gmail.com', '9239493439',110)

];
console.log(array1);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let newArrSort = array1.sort((client1, client2)=>{
    return client1.order - client2.order;
});
console.log(newArrSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function FactoryCar (model, manufacturer, year, speed, engine){
       this.model = model;
       this.manufacturer = manufacturer;
       this.year = year;
       this.speed= speed;
       this.engine = engine;
       this.drive = function (){
           console.log(`їдемо зі швидкістю ${this.speed} на годину`)
       }
       this.info  = function (){
        console.log(`model-${this.model}`);
        console.log(`manufacturer-${this.manufacturer}`);
        console.log(`year-${this.year}`);
        console.log(`speed-${this.speed}`);
        console.log(`engine-${this.engine}`);
       }
       this.increaseMaxSpeed = function (newSpeed){
       this.speed += newSpeed;
       }
       this.changeYear = function (newValue){
        this.year = newValue;
       }
       this.addDriver  = function (driver){
        this.driver = driver;
       }
    this.drive();
    this.info();
    this.increaseMaxSpeed(90);
    this.changeYear(2010);
    this.addDriver({name:'anna',age:15});
}
let createCars = new FactoryCar('skoda', 'France','2007',120, 2000);
console.log(createCars);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class SuperFactoryCars1 {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed= speed;
        this.engine = engine;

    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }
    info (){
        console.log(`model-${this.model}`);
        console.log(`manufacturer-${this.manufacturer}`);
        console.log(`year-${this.year}`);
        console.log(`speed-${this.speed}`);
        console.log(`engine-${this.engine}`);
    }
    increaseMaxSpeed (newSpeed){
        this.speed += newSpeed;
    }
   changeYear  (newValue){
        this.year = newValue;
    }
   addDriver (driver){
        this.driver = driver;
    }
}
let superFactory = new SuperFactoryCars1('renault', 'France','2015',100, 1800,);
console.log(superFactory);
superFactory.drive();
superFactory.info();
superFactory.increaseMaxSpeed(100);
superFactory.changeYear(2000);
superFactory.addDriver({name:'vika',age:17});


function Cinderella (name,age,size){
    this.name = name;
    this.age = age;
    this.size = size;
}
let arrayCinde = [
    new Cinderella('Sophi',23, 30),
    new Cinderella('Sona',21, 32),
    new Cinderella('Sasha',24, 37),
    new Cinderella('Ola',28, 34),
    new Cinderella('Vira',20, 33),
    new Cinderella('Yana',22, 31),
    new Cinderella('Anna',26, 35),
    new Cinderella('Ira',19, 36),
    new Cinderella('Kris',31, 38),
    new Cinderella('Dana',18, 39),
];
console.log(arrayCinde);
function Prince (name,age,size){
    this.name = name;
    this.age = age;
    this.size = size;
}
let prince = new Prince('Ruslan',19, 36);

console.log(prince);
function correspondence (arr1) {
    for (const arr1Element of arr1) {
        if(arr1Element.size === prince.size ){
            prince.wife = arr1Element.name;
        }
    }

}
correspondence(arrayCinde);
const find = arrayCinde.find(arrayCinde  => arrayCinde.size === prince.size )
prince.wife = find;

// *Через Array.prototype. створити власний foreach, filter
 Array.prototype.myFilter = function (callback){
     const array = [];
     for (const elemElement of this) {
        if(callback(elemElement)) {
            array.push(elemElement)
        }
     }
     return array;
 }
 const arrNew =[11, 10, 17, 2].myFilter(elem=> elem > 10);
 console.log(arrNew);
 
 
 Array.prototype.myForEach = function (callback) {
     for (const myArrayElement of this) {
         callback(myArrayElement);
     }
 }
  const arrNew2 = [11, 10, 17, 2].myForEach(elem =>{
    console.log(elem + 1);
 });
