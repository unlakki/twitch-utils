import getMessage from './parser/message';
import getEmotes, { EmoteArray } from './parser/emotes';

export interface Message {
  message: string;
  emotes: EmoteArray;
}

export default (node: Element): Message => ({
  message: getMessage(node),
  emotes: getEmotes(node),
});
