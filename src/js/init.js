// Removes the .no-js class on the HTML and replaces it with the .js class.
// This allows us to apply specific styles for noJS solutions.
const html = document.querySelector('html');

html.classList.remove('no-js');
html.classList.add('js');
