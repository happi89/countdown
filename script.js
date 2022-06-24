const days = document.querySelector('.days-box');
const hours = document.querySelector('hours-box');
const minutes = document.querySelector('mins-box');
const seconds = document.querySelector('sec-box')

const sec = 1000;
const minute = sec * 60;
const hour = minute * 60;
const day = hour * 24;

// 5 days from todays date
const countdownDate = new Date().getTime() + 432000000;

function countdownFunction() {
  setInterval(function() {

  }, 1000)
}