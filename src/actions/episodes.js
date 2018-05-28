export const FETCH_EPISODES = 'FETCH_EPISODES';
export const RECEIVE_EPISODES = 'RECEIVE_EPISODES';

export const fetchEpisodes = () => ({
  type: FETCH_EPISODES,
});

export const receiveEpisodes = episodes => ({
  type: RECEIVE_EPISODES,
  episodes,
});
