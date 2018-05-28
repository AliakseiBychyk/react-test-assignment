export const FETCH_SHOW = 'FETCH_SHOW';
export const RECEIVE_SHOW = 'RECEIVE_SHOW';

export const fetchShow = () => ({
  type: FETCH_SHOW,
});

export const receiveShow = show => ({
  type: RECEIVE_SHOW,
  show,
});
