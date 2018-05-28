import { RECEIVE_EPISODES } from '../actions/episodes';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EPISODES:
      return action.episodes
    
    default:
      return state  
  }
}