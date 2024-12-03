// Navbar scroll Start

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '18px 0';
    } else {
        navbar.style.padding = '25px 0';
    }
});

//--------- NAVBAR TOGGLE Start---------------//



document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav_toggle");
    const navList = document.querySelector(".nav__list");
    const navListLinks = document.querySelectorAll(".active_nav_list_link");
    const navBtn = document.getElementById("nav__btn");

    navToggle.onclick = function () {
        navToggle.classList.toggle("active_toggle");
        navList.classList.toggle("active_nav_list");
    };

    navListLinks.forEach(link => {
        link.onclick = function () {
            navList.classList.remove("active_nav_list");
            navToggle.classList.remove("active_toggle");
        };
    });

    navBtn.onclick = function () {
        navList.classList.remove("active_nav_list");
        navToggle.classList.remove("active_toggle");
    }
});




//--------- NAVBAR TOGGLE END---------------//





function checkElements() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 30) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', checkElements);

window.addEventListener('scroll', checkElements);
