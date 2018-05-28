import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import showReducer from '../reducers/show';
import episodesReducer from '../reducers/episodes';
import rootSaga from '../actions/sagas';

const composeEnhancers = typeof window === 'object'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers({
      show: showReducer,
      episodes: episodesReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
