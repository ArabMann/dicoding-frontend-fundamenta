const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seed = 100;

        setTimeout(() => {
            if (seed >= 10) {
                resolve("Benar")
            } else {
                reject("Salah")
            }
        }, 3000)

    })
}

// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }

// makeCoffee();

/*
Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). 
Lantas bagaimana jika promise gagal dilakukan (onRejected)? Kembali lagi kepada prinsip synchronous code. 
Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.
*/


async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        onsole.log(coffee)
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeCoffee();