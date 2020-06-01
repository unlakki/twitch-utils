import createObserver from '../utils/createObserver';
import { Config } from '../config';

export default (config: Config) => (pointsNode: Element) => (
  createObserver(pointsNode, { childList: true, subtree: true }, (mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLDivElement) {
          const buttonNode = <HTMLButtonElement>(node).querySelector('.tw-button--success');
          if (buttonNode) {
            buttonNode.click();
          }
        }
      });
    });
  })
);
