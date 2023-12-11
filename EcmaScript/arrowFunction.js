// const buah = ['Apel', 'Jeruk', 'Naga', 'Melon'].map(function (name){
//     return name.toUpperCase();
// })

// console.log(buah.join(",")) // APEL,JERUK,NAGA,MELON


const buah = ['Apel', 'Jeruk', 'Naga', 'Melon']
const buahBaru = buah.map(name => {
    return name.toUpperCase();
})

console.log(buahBaru.join(',')) // APEL,JERUK,NAGA,MELON



buah.map(name => {
    return name.toUpperCase();
})

console.log(buah.join(',')) // Apel,Jeruk,Naga,Melon

