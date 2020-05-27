const getElementsArray = (node: Element) => Array.from(
  node.getElementsByClassName('text-fragment'),
);

const getTextContent = (nodes: Element[]) => nodes.map((node) => node.textContent)
  .join('')
  .replace(/ {2,}/g, ' ');

export default (node: Element) => getTextContent(getElementsArray(node));
