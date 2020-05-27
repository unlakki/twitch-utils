import createObserver from '../utils/createObserver';
import parseMessage from './parseMessage';
import removeDuplicateEmotes from './filter/emotes';
import removeRestrictedMessage from './filter/keyword';
import { Config } from '../config';

export default (config: Config) => (chatNode: Element) => (
  createObserver(chatNode, { childList: true }, (mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        const messageNode = <Element>node;

        const msg = parseMessage(messageNode);

        if (config.keyword.active
          && removeRestrictedMessage(config)(messageNode, msg)
        ) {
          return;
        }

        if (config.emotes.active) {
          removeDuplicateEmotes(config)(messageNode, msg);
        }
      });
    });
  })
);
