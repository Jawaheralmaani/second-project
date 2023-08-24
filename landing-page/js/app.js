/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll("#section1, #section2, #section3, #section4");
const myA = document.querySelectorAll('a[href^="#"]');






/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavbar() {

    //const list = document.createElement('li');
    //const link = document.createElement('a');
    //list.appendChild(link)
    //navList.appendChild(list);


    navList.innerHTML += `
      <li><a href='#section1' class='menu__link'>section1</a></li>
      <li><a href='#section2' class='menu__link'>section2</a></li>
      <li><a href='#section3' class='menu__link'>section3</a></li>
      <li><a href='#section4' class='menu__link'>section4</a></li>
    `;

  }
  
 

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavbar();

// Add class 'active' to section when near top of viewport

function addActiveClass() {
    sectionsList.forEach(section => {
      console.log(`${section.id}`, section.getBoundingClientRect().top);
      if (
        window.scrollY > section.offsetTop - 20 &&
        window.scrollY < section.offsetTop + section.offsetHeight - 30
      ) {
        section.classList.add("your-active-class");
        document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");
      } else {
        section.classList.remove("your-active-class");
        document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
      }
    });
  }
// Scroll to anchor ID using scrollTO event
 
function smoothScroll() {
    myA.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
  
  

const navBar = document.querySelector("#navbar__list");

function smoothScroll() {
  navBar.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// Call the smoothScroll function to enable smooth scrolling
smoothScroll();





// Add scroll event listener to the window
window.addEventListener("scroll", addActiveClass);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


