import { Config } from '../../config';
import { Message } from '../parseMessage';

export default (config: Config) => (node: Element, msg: Message) => {
  msg.emotes.forEach((emote) => {
    const { maxSimilarEmotes } = config.emotes;

    if (emote[2] > maxSimilarEmotes) {
      emote[1].splice(maxSimilarEmotes).forEach((emoteNode) => emoteNode.remove());
    }
  });

  return false;
};
