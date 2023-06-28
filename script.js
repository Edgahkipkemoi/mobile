const menuBar = document.querySelector('#hamburger');
const cancelIcon = document.querySelector('#cancel-btn');
const topNav = document.querySelector('.mobile-menu');
const itemNav = document.querySelector('#navs');

function showMenuFunction() {
  if (topNav.style.display === 'none') {
    topNav.style.display = 'block'
  } else {
    topNav.style.display = 'none'
  }
}

function hideMenuFunction() {
  if (topNav.style.display === "block"){
     topNav.style.display = 'none'
  } else {
    topNav.style.display = "block"
  }
}

menuBar.addEventListener('click', showMenuFunction)
cancelIcon.addEventListener('click', hideMenuFunction)
itemNav.addEventListener('click', function(){
  topNav.style.display = 'none'
})

/* popup  */
