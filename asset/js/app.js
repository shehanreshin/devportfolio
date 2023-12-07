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

document.getElementById("socials-linkedin")
    .addEventListener("click", () => window.open("https://www.linkedin.com/in/shehan-reshin"));

document.getElementById("socials-github")
    .addEventListener("click", () => window.open("https://github.com/shehanreshin"));

document.getElementById("socials-gmail")
    .addEventListener("click", () => window.open("mailto:asp.shehanreshin@gmail.com"));

document.getElementById("socials-medium")
    .addEventListener("click", () => window.open("https://medium.com/@shehanreshin"));

document.getElementById("socials-hackerrank")
    .addEventListener("click", () => window.open("https://www.hackerrank.com/profile/asp_shehanreshin"));

document.getElementById("socials-leetcode")
    .addEventListener("click", () => window.open("https://leetcode.com/shehanreshin/"));

document.getElementById("socials-frontendmentor")
    .addEventListener("click", () => window.open("https://www.frontendmentor.io/profile/shehanreshin"));

document.getElementById("socials-codewars")
    .addEventListener("click", () => window.open("https://www.codewars.com/users/shehanreshin"));