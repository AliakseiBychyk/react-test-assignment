import { all, call, put, takeEvery } from 'redux-saga/effects';
import { receiveShow, FETCH_SHOW } from './show'
import { receiveEpisodes, FETCH_EPISODES } from './episodes'

const fetchShowJson = () => {
  const url = 'https://api.tvmaze.com/shows/6771';
  return fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .catch(console.error)
}

const fetchEpisodesJson = () => {
  const url = 'https://api.tvmaze.com/shows/6771/episodes';
    return fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .catch(console.error)
}

function* fetchShow() {
  const show = yield call(fetchShowJson)
  yield put(receiveShow(show))
}

function* fetchEpisodes() {
  const episodes = yield call(fetchEpisodesJson)
  yield put(receiveEpisodes(episodes))
}

function* watchFetchShow() {
  yield takeEvery(FETCH_SHOW, fetchShow)
}

function* watchFetchEpisodes() {
  yield takeEvery(FETCH_EPISODES, fetchEpisodes)
}

export default function* rootSaga() {
  yield all([
    watchFetchShow(),
    watchFetchEpisodes()
  ])
}