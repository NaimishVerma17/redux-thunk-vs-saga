import { AppState as RootState } from './store';
import { createSelector } from 'reselect';
import { AppState } from './reducer';

const getUserState = (state: RootState) => state.users;

export const getUsersSelector = createSelector(getUserState, (state:AppState) => state.users);
export const getLoadingSelector = createSelector(getUserState, (state:AppState) => state.loading);
