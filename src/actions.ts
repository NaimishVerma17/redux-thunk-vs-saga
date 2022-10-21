import { Action as ReduxAction } from 'redux';

export interface Action extends ReduxAction {
    payload?: any
}

export const FETCH_USER = 'fetch_user';
export const FETCH_USER_SUCCESS = 'fetch_user_success';
export const FETCH_USER_FAILED = 'fetch_user_failed';


export const fetchUsers = () => ({
    type: FETCH_USER
});

export const fetchUserFailed = () => ({
    type: FETCH_USER_FAILED
});

export const fetchUserSuccess = (users: { email: string }[]) => ({
    type: FETCH_USER_SUCCESS,
    payload: users
});
