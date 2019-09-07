const target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute .tw-transition');

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    console.log(`> mutation ${mutation.type}`);

    const button = target.querySelector('button');
    if (button) {
      console.log('> coins collected');
      button.click();
    }
  }
});

observer.observe(target, { childList: true, subtree: true });

// if you want to stop automatic coin collection, use the command below (without double slashes):
// observer.disconnect();
