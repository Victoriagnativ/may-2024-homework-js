for (let i = 0; i < 10; i++) {
    document.write(`
    <div style="background-color: royalblue;height:30px;">
    <p style="text-align: center">Lorem Lorem Lorem</p>
    <div/>
    `)
}
for (let i = 0; i < 10; i++) {
    document.write(`
    <div style="background-color: #7ce141; height:30px;">
    <p style="text-align: center">${i + 1} Lorem Lorem Lorem</p>
    <div/>
    `)
}
let i=0;
while (i<10) {
    document.write(`
    <div style="background-color: #dd224d;height:50px;">
    <h1 style="text-align: center">Lorem Lorem Lorem</h1>
    <div/>
    `)
    i++;
    }
let a=0;
while (a<10) {
    document.write(`
    <div style="background-color: #af7575;height:50px;">
    <h1 style="text-align: center"> ${a + 1} Lorem Lorem Lorem</h1>
    <div/>
    `)
    a++;
}
///
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item  of listOfItems) {
    document.write(`
    <ul>
        <li>${item}</li>
    </ul>
    `)
}
//

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
];
for (const item of products) {

        document.write(`
   <div class="product-card">
        <h3 class="product-title">${item.price}- PRICE</h3>
        <img style="width: 300px; height: 300px" src="${item.image}" alt="" class="product-image">
</div>
    `)
}
//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let arrTrue = [];
let arrFalse = [];
let arrAge = [];
for (const user of users) {
    if (user.status){
       // document.write(`
       // <h3>${user.name} - ${user.status}</h3>
       // `)
        arrTrue[arrTrue.length]=user;
    }else{
        arrFalse[arrFalse.length]=user;
    }
    if(user.age > 30){
        arrAge[arrAge.length]=user;
    }
}
console.log(arrTrue);
console.log(arrFalse);
console.log(arrAge);