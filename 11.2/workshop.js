// In this workshop we will be working on making elements fade into view as the user scrolls a page. This effect this great for a better user experience. One of the best examples of this would be https://gyrosco.pe/. Gyroscope has each element come in with some complex animations, we won't be doing that much - just fading them in.
//
// Setup
//
// For this exercise create a new folder on your computer and name it section-transitions-workshop. Inside of this folder make three files: index.html, main.css, and main.js. Don't forget to link these files together with <link> and <script> tags.
// Instructions
//
// Create 4 sections on your page that have different background colors and are 800px in height. If you're stumped on colors you can use, pick 4 from https://flatuicolors.com/.
// They should have the following content:
//
// Section 1 and Section 3 should have a picture on the left and a paragraph on the right.
// Section 2 should have a single picture centered with a caption below it (in smaller text than your regular p tag).
// Section 4 should have a quote from a famous person.
//
// Now that you have the required content, create a css class called hidden and the only thing it should have in it is opacity: 0;. Apply this class to all your content (but not the sections). The page should look like it did from step 1 now, however the actual content is still there.
//
// We want sections to fade in as we scroll the page.
// Create an event listener on the window object that listens for scroll events. It should look something like this:


// scrollPos = window.scrollY;
window.addEventListener('scroll', function(){
    // scrollPos = window.scrollY;
    if (window.scrollY > 700) {
    x = document.getElementById('sec-2');
    x.classList.remove('hidden');
    y = document.getElementById('sec-3');
    y.classList.add('hidden');
  }
});

window.addEventListener('scroll', function(){
    scrollPos = window.scrollY;
    if (window.scrollY > 1400) {
    x = document.getElementById('sec-3');
    x.classList.remove('hidden');
  }
});

window.addEventListener('scroll', function(){
    scrollPos = window.scrollY;
    if (window.scrollY > 2000) {
    x = document.getElementById('sec-4');
    x.classList.remove('hidden');
  }
});
