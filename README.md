# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)

### Screenshot

![Screenshot from 2022-06-25 23-41-13](https://user-images.githubusercontent.com/101960666/175798768-e52b18c5-70e8-4c4a-9f83-4d767adc2861.png)

### Links

- Live Site URL: [Countdown](https://happi89.github.io/countdown/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

```js
// getting todays date in ms 
const today = new Date().getTime();

// getting exact days, hours, minutes, seconds left till countdown ends.
const days = Math.floor(diff / day);
const hours = Math.floor((diff % day) / hour);
const minutes = Math.floor((diff % hour) / minute);
const seconds = Math.floor((diff % minute) / second);
```

### Useful resources

- [How TO - JavaScript Countdown Timer W3schools](https://www.w3schools.com/howto/howto_js_countdown.asp) - This helped me fix my bug that made my countdown app not countdown and stay static. The problem was i got the date that the counter should countdown to in the set interval function which made the counter static.
- [JavaScript Date Objects W3schools](https://www.w3schools.com/js/js_dates.asp) - This taught me all about time and dates in Javascript.
