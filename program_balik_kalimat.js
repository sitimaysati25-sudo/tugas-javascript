// Program Membalik Kata/Kalimat

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kata/kalimat: ", function(kalimat) {

    let hasil = "";

    // Perulangan untuk membalik kalimat
    for (let i = kalimat.length - 1; i >= 0; i--) {
        hasil += kalimat[i];
    }

    console.log("\nKalimat awal  : " + kalimat);
    console.log("Hasil dibalik : " + hasil);

    rl.close();
});