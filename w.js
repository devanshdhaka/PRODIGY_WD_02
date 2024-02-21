let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('startStopButton').innerText = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById('startStopButton').innerText = 'Stop';
  }
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('display').innerText = formattedTime;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((milliseconds % 1000) / 10);

  return (
    padTime(minutes) + ':' +
    padTime(seconds) + ':' +
    padTime(centiseconds)
  );
}

function padTime(time) {
  return time < 10 ? '0' + time : time;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('startStopButton').innerText = 'Start';
  elapsedTime = 0;
  updateDisplay();
}
