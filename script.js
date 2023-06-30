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

const form = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    form.submit();
  } else {
    let errorMessage = form.querySelector('.errorMsg');
    if (errorMessage) {
      form.removeChild(errorMessage);
    }
    errorMessage = document.createElement('p');
    errorMessage.classList.add('errorMsg');
    errorMessage.textContent = 'Oops! An error has occurred, your email must be lowercase.';
    form.appendChild(errorMessage);
  }
}
form.addEventListener('submit', handleSubmit);

const fullNameInfo = document.getElementById('name');
const emailInfo = document.getElementById('email');
const messageInfo = document.getElementById('msg');

function savedFormData() {
  const formData = {
    name: fullNameInfo.value,
    email: emailInfo.value,
    msg: messageInfo.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

fullNameInfo.addEventListener('input', savedFormData);
emailInfo.addEventListener('input', savedFormData);
messageInfo.addEventListener('input', savedFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    fullNameInfo.value = formData.name;
    emailInfo.value = formData.email;
    messageInfo.value = formData.msg;
  }
});
