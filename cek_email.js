// Program Memeriksa Validitas Email

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan alamat email: ", function(email) {

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (polaEmail.test(email)) {
        console.log("Email:", email);
        console.log("Status: Email valid");
    } else {
        console.log("Email:", email);
        console.log("Status: Email tidak valid");
    }

    rl.close();
});