const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]')
}


let colorSwitchInterval = null

refs.btnStart.addEventListener('click', onBtnStartClick)
refs.btnStop.addEventListener('click', onBtnStopClick)

function onBtnStartClick() {
    colorSwitchInterval = setInterval(switchBodyColor, 1000)
    refs.btnStart.disabled = true
}

function onBtnStopClick() {
    clearInterval(colorSwitchInterval)
    refs.btnStart.disabled = false
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function switchBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
}