export default (target?: Element) => (
  (target instanceof Element) ? target : document
);
