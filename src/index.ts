import CommunityPointsCollector from './core/services/CommunityPointsCollector';
import MutationObserverHelper from './core/utils/MutationObserverHelper';

const communityPointsCollector = new CommunityPointsCollector();

const init: MutationObserverInit = {
  childList: true,
  subtree: true,
};

const watcher = (mutations: MutationRecord[], observer: MutationObserver) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof Element) {
        const communityPointsNode = node.querySelector(CommunityPointsCollector.NODE_SELECTOR);
        if (communityPointsNode) {
          communityPointsCollector.startWatch();
          observer.disconnect();
        }
      }
    });
  });
};

MutationObserverHelper.createMutationOnserver(document.body, init, watcher);
