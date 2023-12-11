class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    /*
    kode lainnya
    */
}


class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheel) {
        super(licensePlate, manufacture);
        this.wheel = wheel;
    }

    /*
    kode lainnya
    */
}

class Motorcycle extends Vehicle {
    constructor(licensePlate, manufacture, wheel) {
        super(licensePlate, manufacture);
        this.wheel = wheel;
    }

    /*
    kode lainnya
    */
}

class VehicleFactory {
    /* method static dapat di akses melalui class-nya langsung */
    static repair(udin) {
        udin.forEach(udin => {
            console.log(`Kendaraan ${udin.licensePlate} sedang melakukan perawatan`)
        })
    }
}

const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);

/* Pemanggilan method repair langsung dari class-nya */
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);

/* output:
Kendaraan H121S sedang melakukan perawatan
Kendaraan GF121J sedang melakukan perawatan
Kendaraan TA1408K sedang melakukan perawatan
*/




// const vehicleFactory = new VehicleFactory(); // Ini adalah Instance


/*
Halo, kak. Maksud dari static method itu adalah kita bisa menggunakan method dari suatu class, tanpa harus menginstansiasi class tersebut menjadi objek. 
Kenapa instancenya dihapus? Maksud dari menghapus instance itu adalah untuk membuktikan bahwa kita bisa memanggil method repair dari VehicleFactory()

vehicleFactory.repair([johnCar, tomMotor, dimasCar]);

tanpa harus melakukan instansiasi

const vehicleFactory = new VehicleFactory();

Bila kakak sudah paham bahwa objek harus diiniasiasi terlebih dahulu agar properti dan methodnya bisa digunakan. Static method ini menyederhanakan langkah agar bila terdapat method yang tanpa harus membuat instance dari class nya bisa dipakai langsung, kenapa harus bikin instance dulu? langusung aja panggil nama class nya yaitu 

class VehicleFactory { ... }

ambil methodnya deh repair()

jadi deh VehicleFactory.repair() tanpa harus bikin instance 

const vehicleFactory = new VehicleFactory();
 Semoga membantu kak.
*/