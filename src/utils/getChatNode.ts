import getTargetElement from './getTargetElement';

export const CHAT_SELECTOR = 'chat-scrollable-area__message-container';

export default (from?: Element) => getTargetElement(from)
  .querySelector(`.${CHAT_SELECTOR}`);