// 1. Select the elements we need to interact with
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li');

// 2. Add an event listener for the click
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the list
    // This switches the CSS from display:none to display:flex
    navLinks.classList.toggle('active');
});

// 3. Close the menu when a link is clicked
// (So the menu doesn't stay open covering the screen)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});