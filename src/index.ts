import createObserver from './utils/createObserver';
import getChatNode from './utils/getChatNode';
import createChatObserver from './chat';
import loadConfig from './config';

let chatObserver: MutationObserver;

const config = loadConfig();

createObserver(document.body, { childList: true, subtree: true }, (mutations, observer) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      const chatNode = getChatNode(<Element>node);
       if (!chatObserver && chatNode) {
        chatObserver = createChatObserver(config)(chatNode);
       }
    });
  });
});
