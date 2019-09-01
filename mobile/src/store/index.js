import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistedReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(persistedReducer(rootReducer), middleware);

const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
