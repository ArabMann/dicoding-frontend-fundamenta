// Function Pertama
function selamatPagi(bahasa) {
    console.log(`Selamat Datang adalah bahasa ${bahasa}`);
}

// Function Kedua
const listBahasa = callback => {
    const bahasa = "Indonesia";
    callback(bahasa)
}

listBahasa(selamatPagi)

/*
Jadi selamatPagi adalah function yang akan menampilkan 'Selamat datang bahasa ${bahasa}' pada inspect

listBahasa adalah berisikan variable bahasa = "Indonesia", dan memanggil function dari parameter listBahasa

listBahasa(selamatPagi) -> selamatPagi adalah function namun dimasukan ke Argumen function listBahasa
setelah itu function selamatPagi menjadi parameter function listBahasa

setelah itu parameter callback yang berisikan function selamatPagi ditampilkan

contoh berikut untuk lebih jelas

*/


function listLanguage() {
    const language = "English";

    // callBack
    function goodMorning(language) {
        console.log(`Welcome is ${language} Language`)
    }
    goodMorning(language);
    // Calback
}

listLanguage()





// Latihan Again
// const iniObject = {
//     a: 10,
//     b: 5,
//     c: 3
// };

// const rumusBalok = (paniang, lebar, tinggi) => {
//     console.log(paniang * tinggi * lebar);
// }

// const nilai = (callback, nilaiObject) => {
//     const { a: panjang, b: lebar, c: tinggi } = nilaiObject;
//     callback(panjang, lebar, tinggi)
// }

// nilai(rumusBalok, iniObject)


class Balok {
    constructor(panjang, lebar, tinggi) {
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    volume() {
        return this.panjang * this.lebar * this.tinggi;
    }

    hitungVolume(callback) {
        const result = this.volume();
        callback(result);
    }
}

const iniObject = {
    a: 10,
    b: 5,
    c: 3
};

const nilaiObjectToBalok = (nilaiObject) => {
    const { a: panjang, b: lebar, c: tinggi } = nilaiObject;
    return new Balok(panjang, lebar, tinggi);
}

const tampilkanVolume = (volume) => {
    console.log(`Volume Balok adalah: ${volume}`);
}

const balok = nilaiObjectToBalok(iniObject);
balok.hitungVolume(tampilkanVolume);
console.log(balok)
