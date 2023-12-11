const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Output setelah semua setTimeout selesai
    })
    .catch(error => {
        console.error(error);
    });

/*
Ya, ketika Anda menggunakan Promise.all dengan promise yang berisi setTimeout, Promise.all akan tetap berfungsi dengan baik. Namun, 
perlu diingat bahwa setTimeout adalah operasi asinkronus, 
sehingga dalam hal ini Promise.all akan menunggu hingga semua setTimeout selesai sebelum melanjutkan eksekusi.
*/ 