export const CHAT_CLASSNAME = 'chat-scrollable-area__message-container';

const getTargetElement = (target?: Element) => (
  (target instanceof Element) ? target : document
);

export default (from?: Element) => getTargetElement(from)
  .querySelector(`.${CHAT_CLASSNAME}`);