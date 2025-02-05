// Step One Get All Eelement
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const musicIcon = document.getElementById("icon");
const music = document.getElementById("backgroundAudio");
// [2]
setInterval(function () {
  let dateTime = new Date();
  hrs.innerHTML = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours();
  min.innerHTML =
    (dateTime.getMinutes() < 10 ? "0" : "") + dateTime.getMinutes();
  sec.innerHTML =
    (dateTime.getSeconds() < 10 ? "0" : "") + dateTime.getSeconds();
}, 1000);

//[3]
musicIcon.addEventListener("click", function () {
  music.play();
});
