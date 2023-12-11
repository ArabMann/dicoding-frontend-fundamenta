class ToolsBangunDatar {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    // Methods
    persegiPanjang() {
        return this.panjang * this.lebar;
    }
}

class HitungPersegiPanjang extends ToolsBangunDatar {
    constructor(panjang, lebar) {
        super(panjang, lebar);
    }

    rumusPersegiPanjang() {
        console.log(`Hasil dari Persegi Panjang adalah ?? ${super.persegiPanjang()}`)
    }
}

class HitungBalok extends ToolsBangunDatar {
    constructor(panjang, lebar, tinggi) {
        super(panjang, lebar);
        this.tinggi = tinggi;
    }

    rumusBalok() {
        console.log(`Hasil dari Balok adalah ?? ${super.persegiPanjang() * this.tinggi }`)
    }
}


const persegiPanjang = new HitungPersegiPanjang(5, 3);
const balok = new HitungBalok(5, 3, 10);

persegiPanjang.rumusPersegiPanjang();
balok.rumusBalok()