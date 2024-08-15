let num = [1,2,3,4,5];
let str = ['dwkf','qwjqij','ndjjd','dkwdjiw','djwjd'];
let different =[1,77, 'dejhf',false, true];
console.log(num);
console.log(str);
console.log(different);
//
let arrNew =[];
arrNew[0]= 'jii';
arrNew[1]= 1;
arrNew[2]= true;
console.log(arrNew);
///

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// i=0;
// while (i < arr.length) {
//     if (arr[i]%2){
//         console.log(arr[i]);
//     }
//
//     i++;
// }
// while (i < arr.length) {
//     if (arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
//
//     i++;
// }
// for (let i = 0; i < arr.length; i++){
//     if(arr[i]%2){
//         console.log(arr[i]);
//     }
// }
// for (let i = 0; i < arr.length; i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i]);
//     }
// }
// for (let i = 0; i < arr.length; i++){
//     if(arr[i]%3===0){
//         arr[i] ='okten'
//
//     }
// }
// console.log(arr);
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }
let arrN = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0;i < arrN.length; i++){
    console.log(arrN[i]);
}
//
let array = [1,2,3,'dkkd','kde','kdek','ddk',true,false,true];
for (const arrayElement of array) {
    if(typeof arrayElement === "boolean"){
        console.log(arrayElement)  ;

    }
}
for (let i = 0; i < 10; i++) {
    document.write(`
    <h1>${i}<h1/>
  `)
}
for (let i = 0; i <200 ; i +=2) {
    console.log(i);
}

let books = [
  {
    title: "To Kill a Mockingbird",
    pages: 281,
    authors: ["Harper Lee"],
    genres: ["Fiction", "Classics", "Historical"]
  },
  {
    title: "1984",
    pages: 328,
    authors: ["George Orwell"],
    genres: ["Dystopian", "Science Fiction", "Political Fiction","dfdgdgd"]
  },
  {
    title: "The Great Gatsby",
    pages: 180,
    authors: ["F. Scott Fitzgerald"],
    genres: ["Fiction", "Classics", "Literature"]
  },
  {
    title: "Moby Dick",
    pages: 585,
    authors: ["Herman Melville"],
    genres: ["Adventure", "Classics", "Literature"]
  },
  {
    title: "The Hobbit",
    pages: 310,
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "Adventure", "Classics"]
  }
];
 let maxGenre = 0;
 let bigGenres = '';
// for (let book of books) {
//
//         if (book.genres.length>maxGenre){
//             maxGenre =book.genres.length;
//             bigGenres=book.genres;
//
//         }
//
//
//
// }
// console.log(bigGenres);
for (const book of books) {
  if(book.pages>maxGenre){
    maxGenre = book.pages;
    bigGenres =book;

  }


}
console.log(bigGenres);