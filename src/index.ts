import createObserver from './utils/createObserver';
import getChatNode from './utils/getChatNode';
import getPointsNode from './utils/getPointsNode';
import createChatObserver from './chat';
import createCommutityPointsObserver from './communityPoints';
import loadConfig from './config';

let chatObserver: MutationObserver;

let pointsObserver: MutationObserver;

const config = loadConfig();

createObserver(document.body, { childList: true, subtree: true }, (mutations, observer) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      const chatNode = getChatNode(<Element>node);
       if (!chatObserver && chatNode) {
        chatObserver = createChatObserver(config)(chatNode);
       }

       const pointsNode = getPointsNode(<Element>node);
       if (!pointsObserver && pointsNode) {
        pointsObserver = createCommutityPointsObserver(config)(pointsNode);
       }
    });
  });
});
