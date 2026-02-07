const weddingDate = new Date("Mar 7, 2026 15:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "IT'S TODAY!";
    }
}, 1000);

window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.padding = "10px 50px";
        nav.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        nav.style.padding = "20px 50px";
        nav.style.background = "rgba(255, 255, 255, 0.95)";
    }
};