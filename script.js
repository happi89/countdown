const timeElements = document.querySelectorAll('.box');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// 5 days from todays date
const countdownDate = new Date().getTime() + 432000000;
const today = new Date().getTime();
const diff = countdownDate - today;

function countdownFunction() {
  countdownInterval = setInterval(() => {
    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    const time = [days, hours, minutes, seconds];

    if(diff <= 0) {
      clearInterval(countdownInterval);
      dayBox.textContent = 'D';
      hourBox.textContent = 'O';
      minuteBox.textContent = 'N';
      secondBox.textContent = 'E';
    } else {
      timeElements.forEach((el, i) => el.textContent = time[i]);
    }

  }, sec)
}