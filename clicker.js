// ==UserScript==
// @name Twitch points
// @namespace http://github.net/unlakki/
// @version 0.2
// @description Auto collect points chest.
// @author unlakki
// @match https://www.twitch.tv/*
// @grant none
// ==/UserScript==

(function() {
  function observe(target, config, func) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => func(mutation, observer));
    });

    observer.observe(target, config);
    return observer;
  }

  observe(document.body, { childList: true, subtree: true }, (generalMutation, generalObserver) => {
    const pointsButton = document.querySelector('[data-test-selector="community-points-summary"]>div:nth-child(2) button');
    if (pointsButton) {
      pointsButton.click();
    }
  });
})();
