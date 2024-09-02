// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
// let div = document.createElement('div');
// let btn = document.createElement('button');
// btn.style.width = '50px';
// btn.style.height = '20px';
// div.innerText = 'Hello';
// btn.innerText = 'click';
// div.id = "text";
// document.body.appendChild(div);
// document.body.appendChild(btn);
// btn.onclick = function () {
//     div.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

// let input = document.createElement('input');
// let btn2 = document.createElement('button');
// input.style.width = '70px';
// btn2.style.height = '10px';
// btn2.style.marginLeft= '10px';
// document.body.appendChild(input);
// document.body.appendChild(btn2);
// btn2.addEventListener('click', function () {
//     let value= input.value;
//     if (value<18){
//         confirm('Ваш вік не достатній');
//     }else{
//         confirm('Ваш вік  достатній');
//     }
//
// });
// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
// // під формою з'явився блок з вашим об'єктом
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let btn3 = document.createElement('button');
// document.body.appendChild(input1);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
// document.body.appendChild(btn3);
// btn3.style.marginLeft= '10px';
// input2.style.marginLeft= '5px';
// input3.style.marginLeft= '5px';
// input1.setAttribute('type', 'text');
// input1.setAttribute('placeholder', 'name');
// input2.setAttribute('type', 'text');
// input2.setAttribute('placeholder', 'surname');
// input3.setAttribute('type', 'number');
// input3.setAttribute('placeholder', 'age');
// btn3.style.width = '70px';
// btn3.style.height = '10px';
// btn3.addEventListener('click', function () {
//     let value1 = input1.value;
//     let value2 = input2.value;
//     let value3 = input3.value;
//     let obj={};
//     obj['name'] = value1;
//     obj['surname'] = value2;
//     obj['age'] = value3;
//     console.log(obj);
//     let block = document.createElement('div');
//     block.innerText =value1 + ' ' +  value2 + ' '  + value3;
//     document.body.appendChild(block);
//
// });
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let block = document.createElement('div');
// block.innerText = '0';
// document.body.appendChild(block);
// let valueDocument = localStorage.getItem('valueDocument') || 0;
// valueDocument++;
// localStorage.setItem('valueDocument',valueDocument);
// block.textContent = valueDocument;

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//     в масив sessionsList зберігається інформація про дату
// та час відвідування сторінки.
//     Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// let  sessionsList = JSON.parse(localStorage.getItem('sessionsList')) ||[];
// let currentDate = new Date().toLocaleString();
// sessionsList.push(currentDate);
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
// console.log(sessionsList);

// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.\
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// let input = document.querySelector('input');
// let p = document.querySelector('p');
// console.log(input);
// input.addEventListener('input',function (event) {
//     p.innerText = +this.value * 2.20462;
//
// })

// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName,objToAdd) {
//     if(!localStorage.getItem(arrayName)){
//         throw new Error('jdwkpd');
//     }
//     let array = JSON.parse(localStorage.getItem(arrayName));
//     array.push(objToAdd);
//     localStorage.setItem(arrayName,JSON.stringify(array));
// }
// addToLocalStorage('sessionsList',{});

// Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     // При натисканні кнопки, вся ця інформація зчитується і
//     формується табличка, з відповідним вмістом.

let numberLines = document.createElement('input');
let numberColumns = document.createElement('input');
let content = document.createElement('input');
let btn5 = document.createElement('button');
document.body.appendChild(numberLines);
document.body.appendChild(numberColumns);
document.body.appendChild(content);
document.body.appendChild(btn5);
numberLines.setAttribute('placeholder', 'lines');
numberColumns.setAttribute('placeholder', 'columns');
content.setAttribute('placeholder', 'content');
btn5.style.width = '70px';
btn5.style.height = '20px';
btn5.addEventListener('click',function () {
    const table = document.createElement('table');
    document.body.appendChild(table);
    let valueLine =  numberLines.value;
    let valueColumns =  numberColumns.value;
    let valueContent =  content.value;
    for (let i = 0; i < +valueLine; i++) {
        const line = document.createElement('tr');
        table.appendChild(line);
        for (let j = 0; j < +valueColumns; j++) {
            const column = document.createElement('td');
             line.appendChild(column);
             column.innerText = valueContent;

        }
        table.appendChild(line);
    }

})
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let block1 = document.createElement('div');
block1.innerText = '100грн';
document.body.appendChild(block1);
let valueDocument = JSON.parse(localStorage.getItem('valueDocument')) || 100;
let lastUpdate = localStorage.getItem('lastUpdate') || 0;
const currentTime = Date.now();

if( currentTime - lastUpdate > 1000) {
    valueDocument +=10;
    localStorage.setItem('lastUpdate',currentTime);
}

localStorage.setItem('valueDocument',valueDocument);
block1.textContent = valueDocument;
//
let prev = document.createElement('button');
let nextB = document.createElement('button');
let div = document.createElement('div');
document.body.appendChild(prev);
document.body.appendChild(nextB);
document.body.appendChild(div);
prev.style.height = '20px';
prev.style.width= '70px';
prev.style.marginRight= '10px';
prev.innerText = 'prevent';
nextB.innerText = 'next';
nextB.style.height = '20px';
nextB.style.width= '70px';
nextB.style.marginRight= '20px';
const objects = [];
for (let i = 0; i < 100; i++) {
    objects.push({
        id: i + 1,
        name: `Об'єкт ${i + 1}`
})

}
localStorage.setItem('obj', JSON.stringify(objects));

prev.addEventListener('click',function () {
    let object = JSON.parse(localStorage.getItem('obj'));
    div.appendChild(object);
})