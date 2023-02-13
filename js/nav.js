function navToggle() {
    let navBtn = document.getElementById('navBtn');
    let aside = document.getElementById('aside');
  
    navBtn.onclick = function () {
      if (aside.classList.contains('nav-hidden')) {
        aside.classList.remove('nav-hidden');
      } else {
        aside.classList.add('nav-hidden');
      }
    }
}
  
navToggle();