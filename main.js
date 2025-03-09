const angka = Math.trunc(Math.random() * 20) + 1;
console.log(angka);

document.querySelector(".number").textContent = angka;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if(!guess){
    document.querySelector('.message').textContent = "Masukin duluu tolol bat dahh anjingg";
  }else if (guess == angka){
    document.querySelector('.message').textContent = "Bener, tapi bukan berarti lu jago di land of dawn";
  }else if (guess < angka){
    document.querySelector('.message').textContent = "Kerendahan kaya suku lu";
  }else{
    document.querySelector('.message').textContent = "Ketinggian kaya gaya lu";
  }
  
});
