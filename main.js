// array of words
let words = [
  "styling",
  "cascade",
  "coding",
  "funny",
  "working",
  "programming",
  "Task",
  "setup",
  "roles",
];
// Levels
let category = {
  Easy: 5,
  Normal: 3,
  difficult: 2,
};
// Change category from here
let defaultlevel = "Easy";
let defaultSeconLevel = category[defaultlevel];
// take all variables

let level = document.querySelector(".lvl");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeft = document.querySelector(".time");
let got = document.querySelector(".got");
let total = document.querySelector(".total");
let finish = document.querySelector(".finish");
// append category to the html
level.innerHTML = defaultlevel;
seconds.innerHTML = defaultSeconLevel;
// append time to the time left span
timeLeft.innerHTML = defaultSeconLevel;
// append score to the page
total.innerHTML = words.length;

// start playing
startBtn.onclick = function () {
  this.remove();
  input.focus();
  generateWords();
};
function generateWords() {
  //   take a random word from the words array
  let wordIndex = Math.floor(Math.random() * words.length);
  //   console.log(wordrs[wordIndex]);
  //   append the word to the page
  theWord.innerHTML = words[wordIndex];
  // delete the random word from the words array
  words.splice(wordIndex, 1);
  //   append words to the upcoming word
  upcomingWords.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // call start play function
  startPlay();
}
function startPlay() {
  timeLeft.innerHTML = defaultSeconLevel;
  let start = setInterval(function () {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML === "0") {
      //  stop timer
      clearInterval(start);
      if (input.value.toUpperCase() === theWord.innerHTML.toUpperCase()) {
        // empty input field
        input.value = "";
        // increase score
        got.innerHTML++;
        if (words.length > 0) {
          generateWords();
        } else {
          // remove upcomingWords box
          upcomingWords.remove();
          let divresult = document.createElement("div");
          let txtresult = document.createTextNode("congratulation");
          divresult.appendChild(txtresult);
          divresult.className = "good";
          finish.append(divresult);
        }
      } else {
        let divresult = document.createElement("div");
        let txtresult = document.createTextNode("Game Over");
        divresult.appendChild(txtresult);
        divresult.className = "bad";
        finish.append(divresult);
      }
    }
  }, 1000);
}
// console.log(defaultSeconLevel);
