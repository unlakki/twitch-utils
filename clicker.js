target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute .tw-transition');

observer = new MutationObserver((ms, obs) => {
  console.log('> new mutations');

  for (let m of ms) {
    console.log('> new mutation', m.addedNodes);

    const b = target.querySelector('button');
    if (b) {
     b.click();
    }
  }
});

observer.observe(target, { attributes: true, childList: true, subtree: true });
