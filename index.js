// HOMEWORK 1

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('.button-start');
const btnStop = document.querySelector('.button-stop');
let intervalId = null;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  intervalId = setInterval(() => {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomColorIndex];
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  btnStart.disabled = false;
});

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//HOMEWORK 2
const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="minutes"]'),
  sec: document.querySelector('[data-value="seconds"]'),
}
const countTimer = {
  start() {
    const targetDate = new Date('Jul 17, 2023');
    setInterval(() => {
      const totalTimeLeft = targetDate - new Date();
      const timeComponent = getTimeComponent(totalTimeLeft);
      updateCountTimer(timeComponent);
    }, 1000)
    
  }
}

function getTimeComponent(time){
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return {days, hours, mins, secs}
}

function updateCountTimer({days, hours, mins, secs}){
refs.day.textContent = `${days}`;
refs.hour.textContent = `${hours}`;
refs.minute.textContent = `${mins}`;
refs.sec.textContent = `${secs}`;
}

countTimer.start()
// const myCountDown = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2023'),
// });

// let now = new Date();
// const updateNow = () => {
//     now = new Date();
// }
// const time = setInterval(updateNow, 500);


// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// const secs = Math.floor((time % (1000 * 60)) / 1000);

// const secsEl = document.querySelector('.js-seconds');
// console.log(secsEl);





  