"use strict";


gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    header.style.minHeight = window.innerHeight;

    // OTHER
    const menuBtn = document.querySelector('.menu-burger'),
        scrollBtn = document.querySelector('.more'),
        nav = document.querySelector('.nav'),
        offsetY = getComputedStyle(nav).height.slice(0, -2);

    const tl = gsap.timeline();

    tl.from(".intro__title span", { y: 50, opacity: 0, stagger: .2 })
        .from(".intro__text", { x: -50, opacity: 0 })
        .from(".intro__button", { x: -20, opacity: 0 });

    const titles = gsap.utils.toArray('.block-info__img');
    console.log(titles);
    titles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top center",
            },
            xPercent: -20,
            opacity: 0,
            duration: 1
        });
    });


    menuBtn.addEventListener('click', (e) => {
        document.documentElement.classList.toggle('menu-open');
    });

    scrollBtn.addEventListener('click', () => {
        gsap.to(window, { duration: .8, scrollTo: { y: "#main", offsetY } });
    });

});
