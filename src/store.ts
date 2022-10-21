import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './reducer';


import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import saga from './saga';


const rootReducer = combineReducers({
    users: userReducer
});

export type AppState = ReturnType<typeof rootReducer>

// With normal redux
// export default createStore(rootReducer)

// With redux-thunk
// export default createStore(rootReducer, applyMiddleware(thunk))

// With redux-saga
const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
