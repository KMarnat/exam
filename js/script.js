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

// selectiong the sections
const firstSection = document.querySelector('.mission-section');
const secondSection = document.querySelector('.crew-section');
const thirdSection = document.querySelector('.know-section');

function scrollFirstSection(e) {
  // getBoudingClientRect() function gives info about element size and it's position
  const s1 = firstSection.getBoundingClientRect();

  window.scrollTo({
    // Scrolling to first section, even if already scrolled to middle of hero
    // Top of the 1st section to the top of the viewport + current scroll position
    left: s1.left + window.scrollX,
    top: s1.top + window.scrollY,
    behavior: 'smooth',
  });
}

function scrollSecondSection(e) {
  // getBoudingClientRect() function gives info about element size and it's position
  const s2 = secondSection.getBoundingClientRect();

  window.scrollTo({
    // Scrolling to first section, even if already scrolled to middle of hero
    // Top of the 1st section to the top of the viewport + current scroll position
    left: s2.left + window.scrollX,
    top: s2.top + window.scrollY,
    behavior: 'smooth',
  });
}

function scrollThirdSection(e) {
  // getBoudingClientRect() function gives info about element size and it's position
  const s3 = thirdSection.getBoundingClientRect();

  window.scrollTo({
    // Scrolling to first section, even if already scrolled to middle of hero
    // Top of the 1st section to the top of the viewport + current scroll position
    left: s3.left + window.scrollX,
    top: s3.top + window.scrollY,
    behavior: 'smooth',
  });
}

missionBtn.addEventListener('click', scrollFirstSection);
crewBtn.addEventListener('click', scrollSecondSection);
knowBtn.addEventListener('click', scrollThirdSection);
