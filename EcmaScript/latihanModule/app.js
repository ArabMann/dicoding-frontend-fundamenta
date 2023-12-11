import dataMahasiswa from "./data.js";

const displayMahasiswa = (dataSiswa) => {
    const coffeeStockListElement = document.querySelector("#coffee-stock-list");
    for (const type in dataSiswa) {
        const coffeeStockItemElement = document.createElement("li");
        coffeeStockItemElement.innerText = `${type}: ${dataSiswa[type]}`;
        coffeeStockListElement.appendChild(coffeeStockItemElement);
    }

}
displayMahasiswa(dataMahasiswa)