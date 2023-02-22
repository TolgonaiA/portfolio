// function navToggle() {
//     let navBtn = document.getElementById('navBtn');
//     let aside = document.getElementById('aside');
//
//     navBtn.onclick = function () {
//       if (aside.classList.contains('nav-hidden')) {
//         aside.classList.remove('nav-hidden');
//       } else {
//         aside.classList.add('nav-hidden');
//       }
//     }
// }
//
// navToggle();


const btn = document.getElementById("navBtn");
const nav = document.getElementById("nav");

// if (window.innerWidth < 901) {
//   btn.classList.add('header-btn');
//   nav.classList.add('aside-nav-media');
// }
//
//
// const reportWindowSize = () => {
//   if (window.innerWidth < 901) {
//     btn.classList.add('btn-media');
//     nav.classList.add('main-nav-media');
//     // socials.classList.add('socials-media');
//   } else if (window.innerWidth >= 901) {
//     btn.classList.remove('btn-media');
//     nav.classList.remove('main-nav-media');
//     // socials.classList.remove('socials-media');
//   }
// }
//
// window.onresize = reportWindowSize;
//
// window.addEventListener("resize", reportWindowSize);
//
// btn.addEventListener('click', () => {
//   if (nav.classList.contains('main-nav-media-show')) {
//     nav.classList.remove('main-nav-media-show')
//   } else {
//     nav.classList.add('main-nav-media-show')
//   }
// });