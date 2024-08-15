const squareRect = (width,length)=>{
    console.log(width * length);
}
squareRect(10,20);
///
const squareCircle = (r)=>{
    console.log(2*Math.PI*r);
}
squareCircle(10);
///
const squareCylinder = (r,h) => {
    console.log(2*Math.PI*r*h);
}
squareCylinder(2,10);
///
const array = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
array([1,2,3,4,5,6]);
///
const createText = (text) => {
    document.write(`
    <p>${text}</p>
    `)
}
createText('111111111111111');
///
const createLi = (li) => {
  document.write(`
  <ul>
  <li>${li}</li>
   <li>${li}</li>
    <li>${li}</li>
</ul>>
  `)
}
createLi('swhdwjk');
/// 
const createItem = (li,amount) => {
    document.write(`<ul>`)
    for (let i = 0; i < amount ; i++) {
        document.write(`
         <li>${li}</li>
        `)
    }
    document.write(`</ul>`)
}
createItem('dhejd', 7);
///
const createP = (ar) => {
    document.write(`<ul>`)
    for (const arElement of ar) {
        document.write(`
         <li>${arElement}</li>
        `)
    }
    document.write(`</ul>`)
}
createP([1,2,3,'kdek',false]);
///
const createObj = (ar) => {
    for (const arElement of ar) {
        document.write(`
         <div style="width: 100px;height: 100px; background-color: #4CAF50">
         <p>${arElement.id}</p>
         <p>${arElement.name}</p>
         <p>${arElement.age}</p>
         </div>
        `)
    }
}
createObj([{id:1,name:'jjd',age:20},{id:2,name:'fjjdj',age:21}]);
///
const minElement = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min)

}
minElement([5,2,3,5,-5,7]);
///

const sum = (arrays) => {
    let sumsNum = 0;
    for (let i = 0; i < arrays.length; i++) {
        sumsNum += arrays[i];

    }
    console.log(sumsNum);
}
sum([1,2,10]);
const swap = (arr,index1,index2) => {

        if( index1>=0 && index1 < arr.length && index2>=0 && index2 < arr.length){
            let index = arr[index1];
            arr[index1]= arr[index2];
            arr[index2] = index;
        }
}
let arrNum = [1,2,3,4,5];
console.log(arrNum);
swap(arrNum,3,2);
console.log(arrNum);

///
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
  if(sumUAH>0 && typeof sumUAH ===  'number'){
      for (const element of currencyValues) {
          if(element.currency === exchangeCurrency){
              let exchange = sumUAH/element.value
              console.log(exchange)
          }
      }
  }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')