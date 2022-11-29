// create namespace and init
// create a function that uses the doc to select the submit button
// create an event listener that appends a blank string over my input forms once clicked




// This function that resets the field forms is from https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission and modified for my site.


const portfolio = {};

// WIP DOES NOT WORK HEHE
portfolio.clearForm = () => {
  const contactForm = document.querySelector('#contactForm');
  window.onbeforeunload = () => {
    contactForm.reset();
  }
}

