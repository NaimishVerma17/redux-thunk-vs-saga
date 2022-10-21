import { combineReducers, createStore } from 'redux';

import userReducer from './reducer';

const rootReducer = combineReducers({
    users: userReducer
});

export type AppState = ReturnType<typeof rootReducer>


export default createStore(rootReducer)
