import { RECEIVE_SHOW } from '../actions/show';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SHOW:
      return action.show;

    default:
      return state;
  }
};
