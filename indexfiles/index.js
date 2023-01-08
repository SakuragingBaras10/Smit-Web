const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")


navToggle.addEventListener("click", () =>{
  const visibility = primaryNav.getAttribute("data-visible")

  if (visibility === "false"){
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else if (visibility === "true"){
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
  }
})





const navbar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".heropage");

const sectionOneOptions = {
  rootMargin: "-700px 0px 0px 0px"
};



const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      navbar.classList.add("navbar-scrolled")
    } else{
      navbar.classList.remove("navbar-scrolled");
    }
  })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne)

// const sectionTwo = document.getElementById("about-page-hero")

// const sectionAboutOptions = {
//   rootMargin: "-100px 0px 0px 0px"
// };

// const sectionObserverAbout = new IntersectionObserver(function(entry, sectionObserverAbout){
//   if (!entry.isIntersecting){
//     navbar.classList.add("navbar-scrolled")
//   } else{
//     navbar.classList.remove("navbar-scrolled");
//   }
// },sectionAboutOptions);

// sectionAboutOptions.observe(sectionTwo)
// this section is faq button//
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById("overlay")

overlay.addEventListener("click", () =>{
  const modals = document.querySelectorAll(".modal.active")
  modals.forEach(modal => {
    closeModal(modal)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})


function openModal(modal){
  if (modal === null) return
  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal){
  if (modal === null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

//faq button ends here remember always to understand and place comments according to the source code -pastABE//