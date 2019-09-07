const target = document.querySelector('.community-points-summary .tw-z-above .tw-absolute');
const observer = new MutationObserver((ms, callback) => {
  for (let m of ms) {
    if (m.type === 'childList') target.querySelector('button').click();
  }
});
observer.observe(target, { childList: true });
