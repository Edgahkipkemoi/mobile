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
const projectInfo = [
  {
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    image: 'img/project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.example.com/project1',
    sourceLink: 'https://github.com/example/project1'
  },
  {
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    image: 'img/project2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://www.example.com/project2',
    sourceLink: 'https://github.com/example/project2'
  },
  // Add more project objects as needed
];

const seeButtons = document.querySelectorAll('#see-button');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupImage = document.getElementById('popup-image');
const popupTechnologies = document.getElementById('popup-technologies');
const liveLink = document.getElementById('live-link');
const sourceLink = document.getElementById('source-link');

seeButtons.forEach((seeButton, index) => {
  seeButton.addEventListener('click', function () {
    const element = projectInfo[index];

    // Set project details in the popup
    popupTitle.textContent = element.title;
    popupDescription.textContent = element.description;
    popupImage.src = element.image;
    popupTechnologies.innerHTML = '';
    element.technologies.forEach((technology) => {
      const li = document.createElement('li');
      li.textContent = technology;
      popupTechnologies.appendChild(li);
    });
    liveLink.href = element.liveLink;
    sourceLink.href = element.sourceLink;

    // Show the popup
    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  // Hide the popup when the close button is clicked
  popup.style.display = 'none';
});
