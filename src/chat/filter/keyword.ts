import { Config } from '../../config';
import { Message } from '../parseMessage';

export default (config: Config) => (node: Element, msg: Message) => {
  const foundedItem = config.keyword.list.find(
    (keyword) => new RegExp(keyword, 'gi').test(msg.message),
  );

  if (foundedItem) {
    node.remove();
  }

  return Boolean(foundedItem);
};
