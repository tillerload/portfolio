
// This function that resets the field forms is from https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission and modified for my site.


const portfolio = {};

portfolio.clearForm = () => {
  const contactForm = document.querySelector('#contactForm');
  window.onbeforeunload = () => {
    contactForm.reset();
  }
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// Logic for making nav bar stick to the top of the page 
