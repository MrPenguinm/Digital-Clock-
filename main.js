// Step One Get All Eelement

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
// 
const audio = document.getElementById('backgroundAudio');


// Step Two Function Date();  and Using Methods This Function

// let dateTime = new Date();

// hrs.innerHTML = dateTime.getHours();
// min.innerHTML = dateTime.getMinutes();
// sec.innerHTML = dateTime.getSeconds();

// Up data date step three

setInterval(function() {

    let dateTime = new Date();

hrs.innerHTML = (dateTime.getHours() < 10 ? "0" : "") + dateTime.getHours();
min.innerHTML = (dateTime.getMinutes() < 10 ? "0" : "") + dateTime.getMinutes();
sec.innerHTML = (dateTime.getSeconds() < 10 ? "0" : "") + dateTime.getSeconds();

} , 1000)

// 

document.body.addEventListener('click', function() {
    audio.play(); 
  }); 