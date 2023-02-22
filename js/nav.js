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

btn.addEventListener('click', () => {
  if (nav.classList.contains('aside-list-media')) {
    nav.classList.remove('aside-list-media')
  } else {
    nav.classList.add('aside-list-media')
  }
  console.log(1)
});