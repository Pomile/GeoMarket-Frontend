import { applyMiddleware,  combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import monitorReducersEnhancer from './monitorEnhancer';

import { markets, ui } from './reducers'
const { NODE_ENV } = process.env;
export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = NODE_ENV === 'development' ? composeWithDevTools(...enhancers) : compose(...enhancers);
    const reducers = combineReducers({ markets, ui });
    const store = createStore(reducers, preloadedState, composedEnhancers);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer({markets}))
    }

    return store
}