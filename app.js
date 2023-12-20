// Тоглогчдын ээлжийг хадгалах хувьсагч. 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Өөрийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;

// Шоо яаж буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг санамсаргүйгээр үүсгэж хувьсагчид онооно.

// Програм эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
