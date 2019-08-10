const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');

const allElements = document.querySelectorAll('.digit');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let milliseconds = 0;
let handler = null;

function changeTime() {
    milliseconds += 100;
    let timeString = milliseconds + '';
    let timeArray = timeString.split('').reverse();
    msHundreds.textContent = '0';
    msTens.textContent = timeArray[2];
    secondOnes.textContent = timeArray[3] || '0';
    secondTens.textContent = timeArray[4] || '0';
    console.log('100');
    if (milliseconds >= 10000) {
        clearInterval(handler);
        allElements.forEach(element => element.style.color = 'red')
    }
}

start.addEventListener('click', () => {
    handler = setInterval(changeTime, 100);
});

stop.addEventListener('click', () => {
    clearInterval(handler);
});
