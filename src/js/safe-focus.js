const safeFocusClass = 'safe-focus';
const cutsTheMustard = () => !!document.documentElement.classList;
const htmlEl = document.documentElement;

/**
 *  Add class to key off of for showing focus outlines
 *  @return {undefined}
 */
const activateSafeFocus = () => {
  htmlEl.classList.add(safeFocusClass);
};

/**
 *  Remove class to key off of for showing focus outlines
 *  @return {undefined}
 */
const deactivateSafeFocus = () => {
  htmlEl.classList.remove(safeFocusClass);
};

/**
 *  Bind events for adding & removing class to key off of for showing focus outlines
 *  @return {undefined}
 */
const initSafeFocus = () => {
  if (cutsTheMustard()) {
    htmlEl.classList.remove(safeFocusClass);

    document.addEventListener('mousedown', deactivateSafeFocus);
    document.addEventListener('keydown', activateSafeFocus);
  }
};

initSafeFocus();
