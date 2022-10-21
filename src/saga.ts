import { call, put, takeEvery } from 'redux-saga/effects';
import getUsers from './api';
import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from './actions';

function* fetchUsers(): any {
    try {
        put({ type: FETCH_USER });
        let users = yield call(getUsers);
        users = yield users.json()
        users = users.results.map((user: any) => ({
                email: user.email
            })
        )
        yield put({ type: FETCH_USER_SUCCESS, payload: users });
    } catch (e) {
        yield put({ type: FETCH_USER_FAILED });
    }
}

function* saga() {
    yield takeEvery(FETCH_USER, fetchUsers);
}

export default saga;
