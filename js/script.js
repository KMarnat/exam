'use strict';

// importing the data from data.js
import astronauts from './data.js';

// selecting necessary elements
const cardContainer = document.querySelector('.card-container');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseOverlay = document.querySelector('.close-modal');

const countdown = document.getElementById('countdown');

// loops over data.js file, which is an array of objects. Using the key value pairs this forEach function creates the html with the corresponding info and inserts that html into the crew card container
astronauts.forEach((astronaut) => {
  const html = `
  <div class="card-grid-cell">
    <article class="crew-card">
    <img src="${astronaut.image}" alt="" />
      <div>
        <h5 class="orange-line">${astronaut.title}</h5>
        <h4>${astronaut.name}</h4>
      </div>
    </article>
  </div>
  `;
  cardContainer.insertAdjacentHTML('beforeend', html);
});

// Selecting more, but after previous forEach loop. Classes are created in the forEach function
const crewCard = document.querySelectorAll('.crew-card');
const crewName = document.querySelector('.crew-name');
const crewTitle = document.querySelector('.crew-title');
const crewBirthdate = document.querySelector('.crew-birthdate');
const crewEdu = document.querySelector('.crew-edu');
const crewWork = document.querySelector('.crew-work');
const crewAbout = document.querySelector('.crew-about');
const crewImage = document.querySelector('.crew-image');

// Replacing the placeholder info in the modal. Adding a display flex and removing display hidden (if display flex is always on the modal bugs out).
crewCard.forEach((card, i) =>
  card.addEventListener('click', function () {
    if (i === i) {
      crewImage.src = astronauts[i].image;
      crewName.innerHTML = astronauts[i].name;
      crewTitle.innerHTML = `Title: ${astronauts[i].title}`;
      crewBirthdate.innerHTML = `Birthdate: ${astronauts[i].birthdate}`;
      crewEdu.innerHTML = `Education: ${astronauts[i].education}`;
      crewWork.innerHTML = `Prior work: ${astronauts[i].priorExperience}`;
      crewAbout.innerHTML = astronauts[i].about;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      overlay.classList.remove('hidden');
    }
  })
);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// adding click event listener to the button (x), which hides it and also hides the overlay
btnCloseOverlay.addEventListener('click', function () {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// added keydown event listener, that listens for 'escape' button press that closes the modal window
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// countdown timer
const targetDate = new Date('2023-06-10T12:00:00+03:00');

function updateCountdown() {
  // calculating the remaining time
  const currentTime = new Date().getTime();
  const remainingTime = targetDate.getTime() - currentTime;

  // Calculate the the total hr, min, sec
  const totalHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Format the countdown time
  const formattedTime = `${totalHours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the countdown display in the <span> element
  document.getElementById('countdown').textContent = formattedTime;
}

// update the countdown immediately to avoid delay
updateCountdown();

// update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// adding functionality to nav buttons, that scroll to the corresponding sections
// selecting the 3 nav buttons
const missionBtn = document.querySelector('.mission-btn');
const crewBtn = document.querySelector('.crew-btn');
const knowBtn = document.querySelector('.know-btn');

// creating a function that takes the section class as a parameter
function scrollToSection(section) {
  // using the parameter to get the target section
  const targetSection = document.querySelector(section);

  // getting the info about the size of the element and its position
  const sectionRect = targetSection.getBoundingClientRect();

  // scrolls to a specific part of the document using the section coordinates
  window.scrollTo({
    left: sectionRect.left + window.scrollX,
    top: sectionRect.top + window.scrollY,
    behavior: 'smooth',
  });
}

// adding click event listeners to the three buttons in the nav
missionBtn.addEventListener('click', function () {
  scrollToSection('.mission-section');
});

crewBtn.addEventListener('click', function () {
  scrollToSection('.crew-section');
});

knowBtn.addEventListener('click', function () {
  scrollToSection('.know-section');
});
