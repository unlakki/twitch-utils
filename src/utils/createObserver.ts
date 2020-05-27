export default (target: Node, options: MutationObserverInit, callback: MutationCallback) => {
  const observer = new MutationObserver(callback);
  observer.observe(target, options);

  return observer;
};
