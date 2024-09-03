// let container = document.createElement('div');
// document.body.appendChild(container);
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cardsObj => {
//         const {carts} = cardsObj;
//         console.log(carts);
//             console.log(carts[0]);
//         for (const cart of carts) {
//             let div = document.createElement('div');
//             div.innerText = `
//              "id ":${cart.total}
//              "totalProducts:"${cart.totalProducts}
//              "userId":${cart.userId}
//              "totalQuantity":${cart.totalQuantity}
//              "discountedTotal":${cart.discountedTotal}`
//             container.appendChild(div);
//
//         let list = document.createElement('ol');
//             container.appendChild(list);
//         for (const product of cart.products) {
//            let li = document.createElement('li');
//            li.innerText = `
//            id:${product.id}
//            discountPercentage:${product.discountPercentage}
//            discountedTotal:${product.discountedTotal}
//            price:${product.price}
//            quantity:${product.quantity}
//            title:${product.title}
//            thumbnail:${product.thumbnail}
//            total:${product.total}`
//             const img = document.createElement('img');
//            img.src = product.thumbnail;
//            li.appendChild(img);
//            list.appendChild(li);
//         }
//     }
//     });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
let div2 = document.createElement('div');
document.body.appendChild(div2);
fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(resObj => {
          console.log(resObj);
          let {recipes} = resObj;
          console.log(recipes);
          for (const recipe of recipes) {
              let block = document.createElement('div');
              block.innerText = `
              caloriesPerServing:${recipe.caloriesPerServing}
              cookTimeMinutes:${recipe.cookTimeMinutes}
              cuisine:${recipe.cuisine}
              difficulty:${recipe.difficulty}
              id:${recipe.id}
              ingredients:${recipe.ingredients}
              mealType:${recipe.mealType}
              name:${recipe.name}
              prepTimeMinutes:${recipe.prepTimeMinutes}
              name:${recipe.name}
              rating:${recipe.rating}
              reviewCount:${recipe.reviewCount}
              rating:${recipe.rating}
              reviewCount:${recipe.reviewCount}
              rating:${recipe.rating}
              servings:${recipe.servings}
              tags:${recipe.tags}
              userId:${recipe.userId}`
             div2.appendChild(block);

              let ol = document.createElement('ol');
              div2.appendChild(ol);
              for (const ingredient of recipe.ingredients) {
                  let li1 = document.createElement('li');
                  li1.innerText = ingredient;
                  ol.appendChild(li1);


              }
          }

      })
