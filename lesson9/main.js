// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.color = 'red';
div.style.fontSize = '20px';
div.style.backgroundColor = 'yellow';
div.style.marginBottom = '40px';
div.textContent = 'це новий блок';
let divAdd = document.body.appendChild(div);
const blockClone = div.cloneNode(true);
blockClone.textContent = 'Це клонований блок';
document.body.appendChild(blockClone);



// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// - Є масив:
// ['Main','Products','About us','Contacts']

let array = ['Main','Products','About us','Contacts'];
let ulList = document.createElement('ul');
for (const elem of array) {
    let liList = document.createElement('li');
    liList.innerText = elem;
    ulList.appendChild(liList);

}
document.body.appendChild(ulList);
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    let block = document.createElement('div');
    let p = document.createElement('p');
    p.innerText= item.title + ' - ' + item.monthDuration;

    block.appendChild(p);
    document.body.appendChild(block);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray2) {
    let block = document.createElement('div');
    block.classList.add('item');
    let h1 = document.createElement('h1');
    h1.innerText= item.title;
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.innerText= item.monthDuration;
    p.classList.add('description');
    block.appendChild(h1);
    block.appendChild(p);
    document.body.appendChild(block);
}

