export type Emote = [string, Element[], number];

export type EmoteArray = Emote[];

const getElementsArray = (node: Element) => Array.from(
  node.getElementsByClassName('chat-line__message--emote-button'),
);

const getEmotes = (nodes: Element[]) => (
  nodes.reduce<EmoteArray>((list, node) => {
    const { alt } = <HTMLImageElement>node.querySelector('img');

    const emoteIndex = list.findIndex(([emoteName]) => emoteName === alt);
    if (emoteIndex === -1) {
      list.push([alt, [node], 1]);
    } else {
      list[emoteIndex][1].push(node);
      list[emoteIndex][2] = list[emoteIndex][1].length;
    }

    return list;
  }, [])
);

export default (node: Element) => getEmotes(getElementsArray(node));
