import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getLoadingSelector, getUsersSelector } from './selectors';
import { AppState } from './store';
import { fetchUsersActionCreator } from './thunk';

interface ThunkUserProps {
    users: { email: string }[],
    loading: boolean,
}

const AppWithThunk: React.FC<ThunkUserProps> = ({ users, loading }: ThunkUserProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsersActionCreator());
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return <>{users.map((user: { email: string }) => <h4 key={user.email}>{user.email}</h4>)}</>;
};

const mapStateToProps = (state: AppState) => ({
    users: getUsersSelector(state),
    loading: getLoadingSelector(state)
});

export default connect(mapStateToProps)(AppWithThunk);
