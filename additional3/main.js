let array = [];
// for (let i = 0; i < 100; i++) {
//     if(i%2 === 0){
//         array[array.length]=i;
//     }
//
// }
// console.log(array);
for (let i = 0; i < 100; i++) {
    if(i%2){
        array[array.length]=i;
    }

}
console.log(array);
//
let sum = 0;
let arr = [100,250,50,168,120,345,188];
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
console.log(sum);
console.log(sum/arr.length);
//
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if(user.id === city.user_id){
            user.adress = city;

        }

    }

}
console.log(usersWithId);
let wrd = '';
let str=[ 'a', 'b', 'c'];
for (let i = 0; i <str.length ; i++) {
    wrd += str[i];

}
console.log(wrd);