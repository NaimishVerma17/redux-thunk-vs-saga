import getUsers from './api';
import { fetchUserFailed, fetchUsers, fetchUserSuccess } from './actions';

export const fetchUsersActionCreator = () => async (dispatch: any, getState: any) => {
    dispatch(fetchUsers());
    try {
        const response = await getUsers();
        const data = await response.json();
        dispatch(fetchUserSuccess(data.results.map((user: any) => ({
                        email: user.email
                    })
                )
            )
        );
    } catch (err) {
        dispatch(fetchUserFailed());
    }

};

