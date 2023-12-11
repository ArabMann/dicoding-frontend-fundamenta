// const favorites = ["Seafood", "Salad", "Nugget", "Soup",];

// console.log(...favorites);


/* output:
Seafood Salad Nugget Soup
*/



/* Math.max() -> Mencari nilai terbesar */
// const numbers = [12, 32, 90, 12, 32];

// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])

// console.log(Math.max(... numbers))
/* output
90
*/

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [...favorites, ...others] // Menggunakan spread Operator dapat menggabungkan 2 array didalam 1 variable

// console.log(allFavorites);

/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/



// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number
//     }
//     return result;
// }

// console.log(sum(1, 2, 3, 4, 5));

// /* output
// 15
// */


// const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

// const [manufacture, weight, door, ...items] = refrigerator;

// console.log(manufacture);
// console.log(weight);
// console.log(door);
// console.log(items);


// /* output:
// Samsung
// 50
// 2
// [ 'milk', 'cheese', 'egg', 'butter' ]
// */