const target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute .tw-transition');

const observer = new MutationObserver((ms, obs) => {

  for (let m of ms) {
    const b = target.querySelector('button');
    if (b) {
     b.click();
    }
  }
});

observer.observe(target, { attributes: true, childList: true, subtree: true });
