function getLocalDate() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
}

function updateTime() {
    let date = getLocalDate();
    hours = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12;
    time.innerHTML = hours + ":" + date.getMinutes().toString().padStart(2, '0');
    timeOfDay.innerHTML = date.toLocaleTimeString().slice(-2);
}

const time = document.getElementById("time");
const timeOfDay = document.getElementById("time-of-day");
updateTime();

setInterval(updateTime, 1000);