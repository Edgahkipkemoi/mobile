const sideNav = document.querySelector('#sideNav');
const sideItems = document.querySelector('.column');
const menuBar = document.querySelector('.humburger');
const cancelIcon = document.querySelector('.cancel-btn');

function showMenuFunction() {
  if (sideNav.style.display === 'none') {
    sideNav.style.display = 'block';
  } else {
    sideNav.style.display = 'none';
  }
}

function hideMenuFunction() {
  if (sideNav.style.display === 'block') {
    sideNav.style.display = 'none';
  } else {
    sideNav.style.display = 'block';
  }
}

menuBar.addEventListener('click', showMenuFunction);
cancelIcon.addEventListener('click', hideMenuFunction);
sideItems.addEventListener('click', () => { sideNav.style.display = 'none'; });
