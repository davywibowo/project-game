const angka = Math.trunc(Math.random() * 20) + 1;
console.log(angka);

document.querySelector(".number").textContent = angka;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
});
