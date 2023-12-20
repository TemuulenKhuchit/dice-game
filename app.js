// Тоглоомын бүх газарт ашиглагдах Global хувьсагчдыг зарлая
// Тоглоомыг дууссан эсэхийг хадгалах хувьсагч
var isNewGame;

// Шооны зургийг үзүүлэх элементийг DOM-оос авч ирж хадгалах
var diceDom = document.querySelector(".dice");

// Тоглогчдын ээлжийг хадгалах хувьсагч
var activePlayer;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

// Өөрийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
var roundScore;

// Тоглоомыг шинээр эхлүүлэх
function initGame() {
  // Тоглоом эхэлсэн төлөвт оруулах
  isNewGame = true;

  // 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе
  activePlayer = 0;

  // Тоглогч тус бүрийн оноог хадгалах хувьсагч
  scores = [0, 0];

  // Өөрийн ээлж дээр цуглуулсан оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе.
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрсийг анхны байдалд оруулах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.add("active");

  // Шоог нуух
  diceDom.style.display = "none";
}

// Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1-6 доторх тоог санамсаргүйгээр үүсгэж шооны дугаарт оноох
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургийг ил гаргах
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг гаргах
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлэх
    if (diceNumber !== 1) {
      // 1-ээс ялгаатай буусан тул тоог тоглогчийн оноонд нэмж өгөх
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 буусан тул тоглогчийн цуглуулсан оноог 0 болгож, тоглогчийг солих
      switchPlayer();
    }
  } else {
    alert("Тоглоом дууслаа. New game дарж шинээр эхлүүлнэ үү!");
  }
});

// Hold товчны event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Тоглогчийн одоогийн ээлж дээрээ цуглуулсан оноог нийт оноо дээр нэмж өгөх
    scores[activePlayer] += roundScore;

    // Дэлгэц дээрх оноог өөрчлөх
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Тоглогчийг хожсон эсэхийг шалгах (Оноо 100-с их эсэх)
    if (scores[activePlayer] >= 10) {
      // Тоглоомыг дууссан төлөвт оруулах
      isNewGame = false;

      // Ялагч гэсэн текстийг тоглогчийн нэрний оронд гаргана
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийг солих
      switchPlayer();
    }
  } else {
    alert("Тоглоом дууслаа. New game дарж шинээр эхлүүлнэ үү!");
  }
});

// New game event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

// Дараагийн тоглогчийг сонгох
function switchPlayer() {
  // Тоглогчийн одоогийн ээлж дээрээ цуглуулсан оноог 0 болгох
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Шоог нуух
  diceDom.style.display = "none";

  // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болгох. Үгүй бол идэвхтэй тоглогчийг 0 болгох
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Active class-ийг шилжүүлэх буюу тоглогчийн ээлжийг солих
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
