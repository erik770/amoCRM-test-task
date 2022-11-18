const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const addZerosToStart = (number) => number.toString().padStart(2, 0);
let timer;

const createTimerAnimator = () => {
  const updateTimer = (seconds) => {
    const hours = Math.floor(seconds / 60 / 60);
    const minutes = Math.floor(seconds / 60 - hours * 60);
    const secs = seconds - minutes * 60 - hours * 60 * 60;

    timerEl.textContent = `${addZerosToStart(hours)}:${addZerosToStart(minutes)}:${addZerosToStart(secs)}`;
  }

  return (seconds) => {
    updateTimer(seconds);
    seconds--;

    timer = setInterval(() => {
      updateTimer(seconds);
      seconds--;

      seconds < 0 && clearInterval(timer);
    }, 1000);
    return timer;
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D+/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearInterval(timer);
  animateTimer(seconds);

  inputEl.value = '';
});
