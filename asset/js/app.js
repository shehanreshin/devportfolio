function getLocalDate() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
}

function updateTime() {
    let date = getLocalDate();
    time.innerHTML = date.getHours() + ":" + date.getMinutes();
    timeOfDay.innerHTML = date.toLocaleTimeString().slice(-2);
}

const time = document.getElementById("time");
const timeOfDay = document.getElementById("time-of-day");
updateTime();

setInterval(updateTime, 1000);