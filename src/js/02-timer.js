import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  daysValueEl: document.querySelector('span[data-days]'),
  hoursValueEl: document.querySelector('span[data-hours]'),
  minutesValueEl: document.querySelector('span[data-minutes]'),
  secondsValueEl: document.querySelector('span[data-seconds]'),
  btnStartEl: document.querySelector('button[data-start]'),
}

refs.btnStartEl.disabled = true
let timerInterval = null

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      window.alert("Please choose a date in the future")
    }
    refs.btnStartEl.disabled = false
    refs.btnStartEl.addEventListener('click', () => {
      timerInterval = setInterval(() => {
        timer(selectedDates[0])
      }, 1000);
      refs.btnStartEl.disabled = true
    })
  },
};

flatpickr("#datetime-picker", options);

function timer(futureDate) {
  const timeDifference = futureDate - Date.now()
  if (timeDifference < 0) {
    window.alert("FINISH")
    clearInterval(timerInterval)
    return
  }
  const timeDifferenceObj = convertMs(timeDifference)
  refs.daysValueEl.textContent = timeDifferenceObj.days
  refs.hoursValueEl.textContent = timeDifferenceObj.hours
  refs.minutesValueEl.textContent = timeDifferenceObj.minutes
  refs.secondsValueEl.textContent = timeDifferenceObj.seconds
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
