function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
let startTime, interval;
let elapsedTime = 0;
const stopwatchEl = document.getElementById('stopwatch');
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
function updateStopwatch() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime;
  stopwatchEl.textContent = formatTime(diff);
}
document.getElementById('start').addEventListener('click', () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateStopwatch, 1000);
  }
});
document.getElementById('stop').addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    elapsedTime += Date.now() - startTime;
  }
});
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  stopwatchEl.textContent = "00:00:00";
});
