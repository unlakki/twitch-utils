const target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute .tw-transition');

const observer = new MutationObserver((mutations) => {
  console.log('> new mutations');

  for (let mutation of mutations) {
    console.log('> new mutation', mutation);

    const button = target.querySelector('button');
    if (button) {
     button.click();
    }
  }
});

observer.observe(target, { childList: true });
