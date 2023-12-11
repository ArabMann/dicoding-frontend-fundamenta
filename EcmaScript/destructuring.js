// const profile = {
//     firstName: "Ade Tirta",
//     usia: 21
// };

// profile.firstName = "Adrianta"
// profile.usia = 22

// // menginisialisasi nilai baru melalu object destruction
// const {firstName, usia} = profile;

// console.log(firstName);
// console.log(profile)

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// // Deklarasi Variable
// let firstName = "Dimas";
// let age = 20;


// // Karena variable firstname dan age sudah dideklarasi dan sama dengan property pada object profile. maka deklarasi tersebut dapat digunakan
// // menginisialisasi nilai baru melalui object destruction
// ({firstName, age} = profile);

// console.log(firstName);
// console.log(age);

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }


// const {firstName, age, isMale = false} = profile; // Dapat menambahkan property pada object melalui destrution object

// console.log(firstName)
// console.log(age)
// console.log(isMale)


// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile; // mengubah nama properti dengan cara disamping

// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);


// Destructuring pada Array
const foods = ['Pie', 'Cake', 'Honey']
 
// const myFood = foods[0]
// const yourFood = foods[1]
// const ourFood = foods[2]
 
// console.log(myFood, yourFood, ourFood)



// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);



// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [, , thirdFood ] = favorites;

// console.log(thirdFood);



// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// let myFood = "Ice Cream";
// let herFood = "Noodles";

// [myFood, herFood] = favorites; // Sama Seperti Object

// console.log(myFood);
// console.log(herFood);

// Swapping Old
// var a = 1;
// var b = 2;
// var temp;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// temp = a;
// a = b;
// b = temp;

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/


// Swapping New
// let a = 1;
// let b= 2;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// [a, b] = [b, a]

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// /* output
// Sebelum swap
// Nilai a: 1
// Nilai b: 2
// Setelah swap
// Nilai a: 2
// Nilai b: 1
// */


// const favorites = ["Seafood"];

// const [myFood, herFood = "Salad"] = favorites

// console.log(myFood);
// console.log(herFood);

// /* output:
// Seafood
// Salad
// */