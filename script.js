let timer;
let seconds = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      displayTime();
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  isRunning = false;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (isRunning) {
    const lap = document.createElement("li");
    lap.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(lap);
  }
}

function displayTime() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("display").innerText =
    `${String(hrs).padStart(2, '0')}:` +
    `${String(mins).padStart(2, '0')}:` +
    `${String(secs).padStart(2, '0')}`;
}
