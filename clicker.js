const target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute .tw-transition');

const observer = new MutationObserver((mutations, obs) => {

  for (let mutation of mutations) {
    console.log('> mutation', JSON.stringify(mutation));

    const button = target.querySelector('button');
    if (button) {
      button.click();
    }
  }
});

observer.observe(target, { attributes: true, childList: true, subtree: true });
