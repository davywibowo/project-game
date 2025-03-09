let angka = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreTertinggi = 0;

console.log(angka);

const pesan = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    pesan("Di isi dulu ya ganteng");
    document.querySelector(".guess").disabled = true;
    document.querySelector("body").style.backgroundColor = "#921";
  }
  //ini salah
  else if (guess !== angka) {
    if (score > 1) {
      pesan(guess > angka ? "ketinggian" : "kerendahan");
      score = score - 2;
      document.querySelector(".score").textContent = score;
    } else {
      pesan("lu kalah banget put, jabar lebih ganteng");
      document.querySelector("body").style.backgroundColor = "#921";
      document.querySelector(".guess").disabled = true;
    }
    //ini benar
  } else if (guess === angka) {
    pesan("lu benar");
    document.querySelector("body").style.backgroundColor = "#69be28";
    if (score > scoreTertinggi) {
      scoreTertinggi = score;
      document.querySelector(".highscore").textContent = scoreTertinggi;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  angka = Math.trunc(Math.random() * 20) + 1;
  console.log(angka);

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  pesan("ayo tebak");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").disabled = false;
});
