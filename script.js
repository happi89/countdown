const dayBox = document.getElementById('days');
const hourBox = document.getElementById('hours');
const minuteBox = document.getElementById('minutes');
const secondBox = document.getElementById('seconds');

// unites in ms
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// date around 5 days from now
const countdownDate = new Date().getTime() + 478919611;

function countdownFunction() {
  countdownInterval = setInterval(() => {
    // todays date in ms
    const today = new Date().getTime();
    // difference in from countdown date and today
    const diff = countdownDate - today;
    
    // calculate the countdown in days, hours, minutes, seconds
    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    if(diff < 0) {
      // displays done when countdown is done
      clearInterval(countdownInterval);
      dayBox.textContent = 'D';
      hourBox.textContent = 'O';
      minuteBox.textContent = 'N';
      secondBox.textContent = 'E';
    } else {
      dayBox.textContent = days;
      hourBox.textContent = hours;
      minuteBox.textContent = minutes;
      secondBox.textContent = seconds;
    }

  }, second)
}
// on Load
window.addEventListener('load', countdownFunction);