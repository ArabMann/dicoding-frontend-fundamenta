// Sebelum ada class pada Javascript

// function Car(manufacture, color){
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
// }

// Car.prototype.startEngines = function(){
//     console.log('Mobil dinyalakan ...')
//     this.enginesActive = true;
// }

// Car.prototype.info = function(){
//     console.log(`Manufacture: ${this.manufacture}`)
//     console.log(`Color: ${this.color}`)
//     console.log(`Engines: ${this.enginesActive?"Active":"Inactive"}`)
// }

// let johnCar = new Car("Honda", "Red")
// johnCar.startEngines()
// johnCar.info()


// Setelah Ada Class Pada Javascript
// class Car {

//     // Sama seperti function constructor
//     constructor(manufacture, color) {
//         this.manufacture = manufacture;
//         this.color = color;
//         this.enginesActive = false;
//     }

//     // Sama seperti Car.prototype.startEngine
//     startEngines() {
//         console.log('Mobil dinyalakan...');
//         this.enginesActive = true;
//     }

//     // Sama seperti car.prototype.info
//     info() {
//         console.log(`Manufacture: ${this.manufacture}`);
//         console.log(`Color:  ${this.color}`);
//         console.log(`Engines: ${this.engine ? "Active" : "Inactive"}`);
//     }

// }


// const johnCar = new Car("Honda", "Red");
// johnCar.startEngines();
// johnCar.info();



// Bagian Bagian
// // Constructor
// class Car {
//     constructor(manufacture, color) {
//         this.manufacture = manufacture;
//         this.color = color;
//         this.enginesActive = false;
//     }

//     // Property
//     get color() {
//         return `Warna mobile ${this._color}`;
//     }

//     set color(value) {
//         console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
//         this._color = value;
//     }

//     // End Property

//     // Methods
//     startEngines() {
//         console.log("Mesin dinyalakan");
//         this.enginesActive = true;
//     }

//     info() {
//         console.log(`Manufacture: ${this.manufacture}`);
//         console.log(`Color: ${this.color}`);
//         console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
//     }

//     // End Methods
// }

// const johnCar = new Car("Honda", "Red"); // Instance 1
// const adamCar = new Car("Tesla", "Black"); // Instace 2 .Bersifat Opsional tergantung butuh instance berapa

// console.log(johnCar.color); // output -> Warna Mobil: Red
// johnCar.color = "White"; // Mengubah nilai properti color menjadi white. Karena Class sama aja dengan object maka cara mengganti value sama
// console.log(johnCar.color); // output -> Warna Mobil: White



class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }

    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
    }

    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }

    openDoor() {
        console.log(`Membuka pintu!`);
    }
}

const car = new Car("H121S", "Honda", 4);
car.startEngines();

/* output:
Mesin kendaraan H121S dinyalakan!
*/