import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore} from 'redux-persist';
import reducers from '../reducers';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(reducers, {}, compose(applyMiddleware(...middlewares)));

persistStore(store);

export default store;
