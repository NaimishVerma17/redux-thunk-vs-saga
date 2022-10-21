import { AppState } from './store';
import { createSelector } from 'reselect';

const getUserState = (state: AppState) => state.users;

export const getUsersSelector = createSelector(getUserState, (state) => state.users);
export const getLoadingSelector = createSelector(getUserState, (state) => state.loading);
