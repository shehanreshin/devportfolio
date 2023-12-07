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

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    cursorFit = document.querySelectorAll('.cursor-fit'),
    stylesheet = document.styleSheets[0],
    mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: () => {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach(text => {
    text.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    text.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (text.classList.contains('cursor-sm')) {
            // cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
