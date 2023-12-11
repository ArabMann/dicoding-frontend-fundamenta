// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;

//     if (isCoffeeMakerReady) {
//         resolve('Kopi berhasil dibuat');
//     } else {
//         reject('Mesin Kopi tidak bisa digunakan!');
//     }
// };

// const makeCoffee = new Promise(executorFunction);
// console.log(makeCoffee);

/* Output:
Promise { 'Kopi berhasil dibuat' }
*/

// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = false;

//     if (isCoffeeMakerReady) {
//         resolve('Kopi berhasil dibuat');
//     } else {
//         reject('Mesin Kopi tidak bisa digunakan!');
//     }
// };

// const handlerSuccess = coffee => {
//     console.log(coffee);
// };

// const handlerRejected = rejectionReason => {
//     console.log(rejectionReason)
// };

// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess, handlerRejected);

/* Output:
Mesin Kopi tidak bisa digunakan!
*/


//  Latihan Promise
const a = 'Udin'

const listArray = ["Udin", "Adi", "Suganggo"];

const filterArray = (resolve, reject) => {
    const hasil = listArray.includes("Udin");
    console.log(hasil)
    if (hasil) {
        resolve("Nama tersebut Ada")
    } else {
        reject("Nama tersebut tidak ada")
    }

}

const succes = (responSucces) => {
    console.log(responSucces)
}

const tolak = (responReject) => {
    console.log(responReject)
}

const checkData = new Promise(filterArray)
checkData.then(succes, tolak)