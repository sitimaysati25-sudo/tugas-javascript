// Program Menghitung Pangkat Bilangan

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan: ", function(inputBilangan) {
    rl.question("Masukkan pangkat: ", function(inputPangkat) {

        let bilangan = Number(inputBilangan);
        let pangkat = Number(inputPangkat);
        let hasil = 1;

        if (
            inputBilangan.trim() === "" ||
            inputPangkat.trim() === "" ||
            !Number.isFinite(bilangan) ||
            !Number.isInteger(pangkat) ||
            pangkat < 0
        ) {
            console.log("Input tidak valid. Pangkat harus bilangan bulat nonnegatif.");
        } else {
            for (let i = 1; i <= pangkat; i++) {
                hasil *= bilangan;
            }

            console.log("Bilangan:", bilangan);
            console.log("Pangkat:", pangkat);
            console.log("Hasil:", hasil);
        }

        rl.close();
    });
});