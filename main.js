let angka = Math.trunc(Math.random() * 20) + 1;
console.log(angka);

// document.querySelector(".number").textContent = angka;

const pesan = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess !== angka) {
    pesan(guess > angka ? "ketinggian" : "kerendahan");
  } else if (guess === angka) {
    pesan("lu benar");
    document.querySelector("body").style.backgroundColor = "#69be28";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  angka = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  pesan("ayo tebak");
});

// } else if (guess !== angka) {
//   document.querySelector(".message").textContent =
//     "Bener, tapi bukan berarti lu jago di land of dawn";
//   document.querySelector("body").style.backgroundColor = "#69be28";
// } else if (guess < angka) {
//   document.querySelector(".message").textContent = "Kerendahan kaya suku lu";
// } else {
//   document.querySelector(".message").textContent = "Ketinggian kaya gaya lu";
