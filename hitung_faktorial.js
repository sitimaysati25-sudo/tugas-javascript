// Program Menghitung Faktorial

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan: ", function(input) {

    let bilangan = Number(input);
    let hasil = 1;

    if (
        input.trim() === "" ||
        !Number.isInteger(bilangan) ||
        bilangan < 0 ||
        bilangan > 170
    ) {
        console.log("Input harus bilangan bulat dari 0 sampai 170.");
    } else {
        for (let i = 1; i <= bilangan; i++) {
            hasil *= i;
        }

        console.log("Bilangan:", bilangan);
        console.log("Faktorial:", hasil);
    }

    rl.close();
});