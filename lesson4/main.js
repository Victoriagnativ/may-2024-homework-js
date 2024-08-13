function squareRect(width,length) {
    let square= width * length;
    return square;
}
let result = squareRect(10,20);
console.log(result);
///
function squareCircle(r) {
    return 2*Math.PI*r;
}
let result1 = squareCircle(5);
console.log(result1);
///
function squareCylinder(r,h) {
    return 2*Math.PI*r*h;
}
let result2 = squareCylinder(5,6);
console.log(result2);
///
function array(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);

    }

}
array([1,2,3,4,5,6,7,8]);
///
function createText(text) {
    document.write(`
    <p>${text}</p>
    `)
}
createText('heiwjeokqkeoq');
createText('pdlqwpdjdwkfkw');
//

function createList(li) {
    document.write(`
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
    </ul>
    `)
}
createList('1');
createList('2');
//
function createItem(li,amount) {
    document.write(`<ul>`)
    for (let i = 0; i < amount ; i++) {
        document.write(`
         <li>${li}</li>
        `)
    }
    document.write(`</ul>`)
}
createItem('1',5);
////
function createP(ar) {
    document.write(`<ul>`)
    for (const arElement of ar) {
        document.write(`
         <li>${arElement}</li>
        `)
    }
    document.write(`</ul>`)
}
createP([1,2,3,false,true,'one','two','three']);
///
function createDiv(ar) {
    for (let i = 0; i <ar.length ; i++) {
        document.write(`
         <div style="width: 100px;height: 100px; background-color: #4CAF50">
         <p>${ar[i].id}</p>
         <p>${ar[i].name}</p>
         <p>${ar[i].age}</p>
         </div>
        `)
    }

}
createDiv([{id:1,name:'Ola',age:20},{id:2,name:'Vika',age:21},{id:3,name:'Sona',age:22}]);

///
function minNum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
            // console.log(min);
        }
    }
    return min;
}
console.log(minNum([1,2,4,-5,7,6]));
///
function sum(arrays) {
    let sumsNum = 0;
    for (let i = 0; i < arrays.length; i++) {
        sumsNum += arrays[i];

    }
    return sumsNum;
}
console.log(sum([1,2,4,5,7,6]));
///
function swap(arr,index1,index2) {
    if(index1 >=0 && index1 < arr.length && index2 >=0 && index2<arr.length){
      let index = arr[index1];
      arr[index1] = arr[index2];
      arr[index2]=index;
    }
}
let num=[1,2,4,5,7,6];
console.log(num);
swap(num,2,4);
console.log(num);
///

function exchange(sumUAH,currencyValues,exchangeCurrency){
    if(sumUAH>0 && typeof sumUAH ===  'number'){
        for (const elem of currencyValues) {
            if(elem.currency === exchangeCurrency){
                let moneyEx = sumUAH/elem.value;
                console.log(moneyEx);
            }
        }
    }

}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
