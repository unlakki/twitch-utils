import getTargetElement from './getTargetElement';

export const POINTS_SELECTOR = 'community-points-summary'

export default (from?: Element) => getTargetElement(from)
  .querySelector(`.${POINTS_SELECTOR}`);
