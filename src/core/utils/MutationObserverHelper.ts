class MutationObserverHelper {
  public static createMutationOnserver = (
    target: Node,
    init: MutationObserverInit,
    callback: MutationCallback,
  ) => {
    const observer = new MutationObserver(callback);
    observer.observe(target, init);

    return observer;
  };
}

export default MutationObserverHelper;
