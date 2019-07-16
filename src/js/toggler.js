/*
 * ACCESSIBLE TOGGLER
 * ==================
 * Add the js-toggler class to any element to create a toggler. The ID attribute
 * on the toggler must match the aria-labelledby attribute of the item being toggled.
 *
 * HTML Example:
 * <button id="uniqueID" class="js-toggler" aria-expanded="true">Toggle</button>
 * <div aria-labelledby="uniqueID" aria-hidden="false">...</div>
 */
const togglers = document.querySelectorAll('.js-toggler');

if (togglers) {
  for (let i = 0; i < togglers.length; i += 1) {
    const toggler = togglers[i];
    const togglerID = toggler.getAttribute('id');
    const togglerContent = document.querySelector(`[aria-labelledby="${togglerID}"]`);
    let hiddenContent = true;
    let expandedContent = false;

    // Hide the togglable content on page load
    togglerContent.setAttribute('aria-hidden', hiddenContent);
    toggler.setAttribute('aria-expanded', expandedContent);

    toggler.addEventListener('click', () => {
      // Toggle the aria-hidden and aria-expanded values on click
      if (hiddenContent) {
        hiddenContent = false;
        expandedContent = true;
      } else {
        hiddenContent = true;
        expandedContent = false;
      }

      // Udate the toggler button and content elements with toggled values
      togglerContent.setAttribute('aria-hidden', hiddenContent);
      toggler.setAttribute('aria-expanded', expandedContent);
    });
  }
}
