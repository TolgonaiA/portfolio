
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