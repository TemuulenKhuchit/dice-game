// Тоглогчдын ээлжийг хадгалах хувьсагч. 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Өөрийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
var roundScore = 0;

// Шоо яаж буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг санамсаргүйгээр үүсгэж хувьсагчид онооно.
var dice = Math.floor(Math.random() * 6) + 1;

// Програм эхлэхэд бэлтгэе.
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо: " + dice);
