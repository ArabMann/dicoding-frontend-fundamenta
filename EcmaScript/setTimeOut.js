// setTimeOut memiliki 2 parameter pertama fungsi yang akan dijalankan secara asynchronus, kedua nilai number dalam millisecond, berfungsi untuk menunggu fungsi dijalankan

// const getCake = () => {
//     let cake = '';
//     console.log("Sedang membuat kue, silakan tunggu ....")
//     setTimeout(() => {
//       cake = "Kue Selesai!"
//       console.log(cake)
//     }, 3000)
//     return cake;

//   }

//   const cake = getCake();
//   console.log(cake);

/*output:
Sedang membuat kue, silakan tunggu ....
null
*/


//   Callback pattern

const getCake = (namaParameterBebas) => {
    console.log(namaParameterBebas)
    let cake = null;
    console.log("Sedang membuat kue, silakan tunggu ....")
    setTimeout(() => {
        cake = "Kue Selesai!";
        namaParameterBebas(cake);
    }, 3000)
}

getCake(cake => {
    console.log(cake);
})



/* output:
Sedang membuat kue, silakan tunggu ....
---- setelah 3 detik ----
Kue Selesai!
*/