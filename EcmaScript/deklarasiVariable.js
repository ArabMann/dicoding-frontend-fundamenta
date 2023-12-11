// Gunakan let ketika variabel akan diinisialisasikan kembali nilainya. 
// Gunakan const ketika variabel tidak akan diinisialisasikan kembali nilainya.
// Jangan Gunakan Var

// let nama =  "Ade Tirta Adrianta";
// nama = "ArabMann";

// console.log(nama);

// Akan Menjadi Error dikarenakan const tidak dapat diinisialisasi kembali
// const usia = 20;

// console.log(usia);



// Hoisting, agar tidak terjadi hoisting gunakan let dan const
// function makeTea(isCold) {
//     if (isCold) {
//        var tea = 'Make an Ice Tea!';
//     } else {
//        var tea = 'Make a Hot Tea!';
//     }
//     return tea;
// }

// console.log(makeTea(false))



// function makeTea(isCold) {
//     let tea = ''
//     if (isCold) {
//         tea = 'Make an Ice Tea!';
//     } else {
//         tea = 'Make a Hot Tea!';
//     }
//     return tea;
// }

// console.log(makeTea(false))



// Object
const person = {
    nama: "Ade Tirta",
    usia: 20
}

console.log(person)

// Menambah property Object
person.universitas = "Esa Unggul"
console.log(person)

// mengganti nilai properti
person.universitas = 'Binus'
console.log(person)


// Array
const buah=  ['Anggur','Appel'];
console.log(buah);

buah.push('leci')
console.log(buah)

// mengganti array
buah[1] = 'Melon'

console.log(buah)

// menghapus array
buah.pop()
console.log(buah)