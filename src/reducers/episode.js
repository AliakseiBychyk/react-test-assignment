import { SET_EPISODE } from '../actions/episode';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_EPISODE:
      return action.episode;

    default:
      return state;
  }
};
