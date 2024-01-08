const diplayTimer = document.getElementById("timer");
const stopIcon = document.getElementById("stop");
const playIcon = document.getElementById("play");
const resetIcon = document.getElementById("reset");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  diplayTimer.innerHTML = h + ":" + m + ":" + s;
}

playIcon.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
});

stopIcon.addEventListener("click", () => {
  clearInterval(timer);
});

resetIcon.addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  diplayTimer.innerHTML = "00:00:00";
});
