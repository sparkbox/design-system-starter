const copyBtns = Array.from(document.querySelectorAll('.drizzle-pattern__copy-button'));

function success(copyBtn) {
  copyBtn.classList.add('drizzle-pattern__copy-button--success');
  setTimeout(() => {
    copyBtn.classList.remove('drizzle-pattern__copy-button--success');
  }, 1000);
}

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener('click', () => {
    const snippet = copyBtn.parentNode.parentNode.querySelector('.drizzle-pattern__demo-box--code');
    if ('clipboard' in navigator) {
      // modern copy
      const text = snippet.innerText;
      navigator.clipboard.writeText(text).then(() => success(copyBtn));
    } else {
      // legacy copy
      const range = document.createRange();
      range.selectNode(snippet);
      window.getSelection().addRange(range);
      const copied = document.execCommand('copy');
      if (copied) {
        success(copyBtn);
      }
      window.getSelection().removeAllRanges();
    }
  });
});
