// Program Menghapus Spasi dari Kalimat

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", function(kalimat) {

    let hasil = "";

    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== " ") {
            hasil += kalimat[i];
        }
    }

    console.log("Kalimat awal  :", kalimat);
    console.log("Setelah dihapus:", hasil);

    rl.close();
});