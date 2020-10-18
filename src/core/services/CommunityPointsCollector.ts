import MutationOserverHelper from '../utils/MutationObserverHelper';

class CommunityPointsCollector {
  public static readonly NODE_SELECTOR = '[data-test-selector="community-points-summary"]';

  private readonly _buttonNodeSelector = '.tw-button--success';

  private _observer?: MutationObserver;

  public startWatch = () => {
    if (this._observer) {
      throw new Error('Observer already running.');
    }

    this._observer = this.initAndGet();
  };

  public stopWatch = () => {
    if (this._observer) {
      this._observer.disconnect();
    }
  };

  private initAndGet = () => {
    const targetNode = document.querySelector(CommunityPointsCollector.NODE_SELECTOR);
    if (!targetNode) {
      throw new Error('Community points target node not found.');
    }

    const init: MutationObserverInit = {
      childList: true,
      subtree: true,
    };

    return MutationOserverHelper.createMutationOnserver(targetNode, init, this.watcher);
  };

  private watcher = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLDivElement) {
          const buttonNode = <HTMLButtonElement>node.querySelector(this._buttonNodeSelector);
          if (buttonNode) {
            buttonNode.click();
          }
        }
      });
    });
  };
}

export default CommunityPointsCollector;
