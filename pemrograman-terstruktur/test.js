const prompt = require("prompt-sync")();

function KartuWajik(ukuran) {
  const lebar = 2 * ukuran + 3;
  const garis = "#" + "-".repeat(lebar - 2) + "#";

  console.log(garis);

  for (let i = 1; i <= ukuran; i++) {
    let Kiri = " ".repeat(ukuran - i + 1);
    if (i === 1) {
      console.log("|" + Kiri + "♦" + Kiri + "|");
    } else {
      let Tengah = " ".repeat((i - 1) * 2 - 1);
      console.log("|" + Kiri + "♦" + Tengah + "♦" + Kiri + "|");
    }
  }S

  for (let i = ukuran - 1; i >= 1; i--) {
    let Kiri = " ".repeat(ukuran - i + 1);
    if (i === 1) {
      console.log("|" + Kiri + "♦" + Kiri + "|");
    } else {
      let Tengah = " ".repeat((i - 1) * 2 - 1);
      console.log("|" + Kiri + "♦" + Tengah + "♦" + Kiri + "|");
    }
  }

  console.log(garis);
}

let input = prompt("Masukkan ukuran kartu wajik (1-6): ");
let ukuran = parseInt(input);

if (!isNaN(ukuran) && ukuran >= 1 && ukuran <= 6) {
  console.log(`\nKartu wajik dengan ukuran ${ukuran}:\n`);
  KartuWajik(ukuran);
} else {
  console.log("Tidak Valid. Harus angka antara 1 sampai 6.");
}