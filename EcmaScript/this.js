// Regular Function
// function buah(nama, warna) {
//     return `${nama}  ${warna}`;
// }

// console.log(buah("Nika", "Ungu"))

// Regular Function dapat digunakan menjadi constructor, contoh sebagai berikut
// Nanti Regular function dapat menjadi object apabila terdapat keyword New pada pemanggila
// function Mobil(model, warna, bahanBakar) { // untuk menjadi object nama depan function harus besar, contoh function Mobil()
//     this.model = model;
//     this.warna = warna;
//     this.bahanBakar = bahanBakar;
//}

// const beliMobil = new Mobil('Yamaha', "BlackDOf", "Bensin"); // Keyword new terdapat disini 

// const { model, warna, bahanBakar } = beliMobil

// console.log(model)
// console.log(warna)
// console.log(bahanBakar)


// Untuk arrow function tidak dapat bisa membuat object dikarenakan tidak akan pernah memiliki nilai this.



// Membuat Object menggunakan constructor
class Motor {
    constructor(models, color, oil) {
        this.type = models; 
        this.warna = color;
        this.bahan = oil;
    }

    introduce(greeting) {
        setTimeout(() => {
            // this -> People
            console.log(`${greeting}`)
            console.log(`Saya ingin membeli motor Type ${this.type}, dengan warna ${this.warna}.`);
            console.log(`dan berbahan Bakar ${this.bahan}`);
        }, 300);
    }
}

const beliMotor = new Motor("Duccati", "Merah", "Bensin");

const { type, warna, bahan } = beliMotor

console.log(type)

beliMotor.introduce('Selamat Siang')