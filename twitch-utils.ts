// ==UserScript==
// @name         twitch-utils
// @namespace    https://github.com/unlakki/
// @version      0.5
// @description  Fuck unfollow button. Auto collect points. Hide emotes.
// @author       unlakki
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

const MAX_ALLOWED_DUPLICATE_EMOTES_IN_ONE_MESSAGE = 2;

let isHideMoreThenTwoSimilarEmotesInOneMessageActive = false;
let isUnfollowButtonHidden = false;
let isAutoCollectChannelPointsActive = false;

interface MutationObserverFunc {
  (mutation: MutationRecord, observer: MutationObserver): void;
};

const observe = (target: Element, config: MutationObserverInit, func: MutationObserverFunc) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => func(mutation, observer));
  });
  observer.observe(target, config);
  return observer;
};

type EmoteInfo = [string, { quantity: number, nodes: Element[] }];

const hideMoreThenTwoSimilarEmotesInOneMessage = () => {
  const target = document.querySelector('.chat-list__list-container');
  if (!target || isHideMoreThenTwoSimilarEmotesInOneMessageActive) {
    return;
  }

  isHideMoreThenTwoSimilarEmotesInOneMessageActive = true;

  const reducer = (emotes: EmoteInfo[], emoteElement: HTMLImageElement) => {
    const emoteName = emoteElement.alt;

    if (emotes.findIndex((e) => e[0] === emoteName) === -1) {
      emotes.push([emoteName, { quantity: 0, nodes: [] }]);
    }

    const emoteInfo = emotes[emotes.findIndex((e) => e[0] === emoteName)][1];

    if (emoteInfo.quantity >= MAX_ALLOWED_DUPLICATE_EMOTES_IN_ONE_MESSAGE) {
      emoteInfo.nodes.push(emoteElement);
    }

    emoteInfo.quantity += 1;

    return emotes;
  };

  const observerFunc: MutationObserverFunc = (mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLDivElement) {
        const emotesWhichMustBeDeleted = Array.from(
          node.querySelectorAll<HTMLImageElement>('.chat-line__message--emote'),
        ).reduce<EmoteInfo[]>(reducer, []);

        emotesWhichMustBeDeleted.forEach((emoteInfo) => {
          emoteInfo[1].nodes.forEach((emoteElement) => emoteElement.remove());
        });
      }
    });
  };

  observe(target, { childList: true, subtree: true }, observerFunc);
};

const hideUnfollowButton = () => {
  const unfollowButton = document.querySelector('[data-a-target="unfollow-button"]');
  if (!unfollowButton) {
    return;
  }

  unfollowButton.remove();

  isUnfollowButtonHidden = true;
};

const autoCollectChannelPoints = () => {
  const target = document.querySelector('.community-points-summary');
  if (!target || isAutoCollectChannelPointsActive) {
    return;
  }

  isAutoCollectChannelPointsActive = true;

  observe(target, { childList: true, subtree: true }, (mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLDivElement) {
        const pointsButton = <HTMLButtonElement>node.querySelector('div:nth-child(2) button');
        if (pointsButton) {
          pointsButton.click();
        }
      }
    });
  });
};

observe(document.body, { childList: true, subtree: true }, (mutation, observer) => {
  hideMoreThenTwoSimilarEmotesInOneMessage();

  hideUnfollowButton();

  autoCollectChannelPoints();

  if (
    isHideMoreThenTwoSimilarEmotesInOneMessageActive
    && isUnfollowButtonHidden
    && isAutoCollectChannelPointsActive
  ) {
    observer.disconnect();
  }
});
