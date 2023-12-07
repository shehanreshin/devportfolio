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

document.getElementById('nav-about')
    .addEventListener('click', () => gsap.to(window, { duration: .5, scrollTo: "#about-section" }));

document.getElementById('nav-stack')
    .addEventListener('click', () => gsap.to(window, { duration: .7, scrollTo: "#stack-header-section" }));

document.getElementById('nav-projects')
    .addEventListener('click', () => gsap.to(window, { duration: .9, scrollTo: "#projects-header-section" }));

document.getElementById('nav-socials')
    .addEventListener('click', () => gsap.to(window, { duration: 1.1, scrollTo: "#socials-header-section" }));

document.getElementById('nav-back-to-top')
    .addEventListener('click', () => gsap.to(window, { duration: 1.3, scrollTo: 0 }));


gsap.registerPlugin(ScrollToPlugin)
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    cursorLink = document.querySelectorAll('.cursor-link'),
    stylesheet = document.styleSheets[0],
    statusCircle = document.getElementById('status-circle'),
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

t1 = gsap.timeline();

t1.to({}, 0.016, {
    repeat: -1,

    onRepeat: () => {
        gsap.set(statusCircle, {
            css: {

            }
        })
    }
});

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

var iconArrow = cursor.children[0];

cursorScale.forEach(text => {
    text.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    text.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (text.classList.contains('cursor-sm')) {
            cursor.classList.add('grow-small');
        }
    });
});

cursorLink.forEach(container => {
    container.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow-link');
        iconArrow.setAttribute('style', 'opacity: 0;');
    });
    container.addEventListener('mousemove', () => {
        cursor.classList.add('grow-link');
        iconArrow.setAttribute('style', 'opacity: 1;');
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
