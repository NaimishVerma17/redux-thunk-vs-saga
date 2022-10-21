import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk'

import userReducer from './reducer';

const rootReducer = combineReducers({
    users: userReducer
});

export type AppState = ReturnType<typeof rootReducer>

// With normal redux
// export default createStore(rootReducer)

// With redux-thunk
export default createStore(rootReducer, applyMiddleware(thunk))
