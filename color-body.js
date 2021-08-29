const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const startEl = document.querySelector('[data-action="start"]')
const stopEl = document.querySelector('[data-action="stop"]')
const bodyEl = document.querySelector('body')


startEl.addEventListener('click', onStart);
stopEl.addEventListener('click', onStop);
let timerId = null;
let isActive = false;

function onStart() {
    if (isActive) { return };
    isActive = true;
    timerId = setInterval(() => {
        
        
        const index = randomIntegerFromInterval(0, colors.length - 1);
        const color = colors[index]
       bodyEl.style.backgroundColor = `${color}`;
    }, 1000)
}

function onStop() {
    clearInterval(timerId);
    isActive = false;
}