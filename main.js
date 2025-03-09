let angka = Math.trunc(Math.random() * 20) + 1;
console.log(angka);

// document.querySelector(".number").textContent = angka;

let score = 20;

const pesan = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
if (!guess){
  pesan("Di isi dulu ya ganteng")
}
  //ini salah
  else if(guess !== angka) {
    if (score > 1){
    pesan(guess > angka ? "ketinggian" : "kerendahan");
    score = score - 2;
    document.querySelector('.score').textContent = score;
    }else{
    pesan("lu kalah banget");
    document.querySelector("body").style.backgroundColor = "#ff8849";
    document.querySelector('.score').textContent = 0;
    }
  //ini benar
  } else if (guess === angka) {
    pesan("lu benar");
    document.querySelector("body").style.backgroundColor = "#69be28";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  angka = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  pesan("ayo tebak");
  document.querySelector('.score').textContent = score;
});

// } else if (guess !== angka) {
//   document.querySelector(".message").textContent =
//     "Bener, tapi bukan berarti lu jago di land of dawn";
//   document.querySelector("body").style.backgroundColor = "#69be28";
// } else if (guess < angka) {
//   document.querySelector(".message").textContent = "Kerendahan kaya suku lu";
// } else {
//   document.querySelector(".message").textContent = "Ketinggian kaya gaya lu";

