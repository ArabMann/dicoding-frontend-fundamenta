// Function map() dapat mengembalikan array dan object tidak merubah array aslinya
// Function forEach() tidak dapat mengembalikan nilai array dan object sehingga dapat merubah array awal

// const upperizedNames = ["Dimas", "Widy", "Buchori"].map(function (name) {
//     return name.toUpperCase();
// })

// console.log(...upperizedNames);
/* output:
DIMAS WIDY BUCHORI
*/


// const buah = ["Mangga", "Apel", "Sirsak"]
// const hewan = ["Kucing", "Sapi", "Naga"]


// ketika menggunakan map dapat dimasukan kedalam variable atau wadah baru
// const hewanBaru = hewan.map(function (e) {
//     return e.toLowerCase();
// })


// console.log(...hewanBaru)

// Sedangkan Menggunakan ForEach tidak dianjurkan untuk dimasukan kedalam wadah baru atau variable baru

// const buahBaru = buah.forEach(function(e){
//     console.log(e.toLowerCase())
// })

// console.log(buahBaru)


// Arrow Function
// const buah = ["Mangga", "Apel", "Sirsak"]
// const hewan = ["Kucing", "Sapi", "Naga"]

// const buahBaru = buah.map(nama => nama.toUpperCase())
// console.log(...buahBaru)

// const hewanBaru = hewan.map((name) =>{
//     return name.toLowerCase()
// })

// console.log(...hewanBaru)


// ["Dimas", "Widdy", "Buchori"].forEach(name => console.log(`Nama saya ${name}`));


// Arrow Function Expression
// const rumusKubus = (s) => {
// return s*s*s;
// }

// console.log(rumusKubus(3));

// const sayHello = (greet) => console.log(greet)
// sayHello("Hallo")

// Arrow Function Object
// Arrow function tidak mwndukung penggunaan this
// const user = {
//     nama: "Adrianta",
//     introduce: () => console.log(`Nama saya ${this.nama}`)
// }

// user.introduce() // Nama saya undifined



// Untuk object lebih baik menggunakan function() daripada Arrow Function () =>
// const person = {
//     nama: "ArabMann",
//     introduce: function(daerah){
//         console.log(`Nama saya ${this.nama}, Asli ${daerah}`)
//     }
// }
// person.introduce("Jakarta")


// const sayHello = language => {
//     if(language.toUpperCase() === "INDONESIA") {
//         return "Selamat Pagi!";
//     } else {
//         return "Good Morning!";
//     }
// }

// console.log(sayHello("Indonesia"));







// Regular Function
// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// // menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//     // this -> People
//     setTimeout(function() {
//        // this -> ??
//         console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
//         console.log(`Hobby saya adalah ${this.hobby}`)
//     }, 300)
// }

// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMyself();

/* output:
Hello! Nama saya undefined, umur saya undefined.
Hobby saya adalah undefined
*/






// Arrow Function
function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
        // this -> People
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();