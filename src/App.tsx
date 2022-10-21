import getUsers from './api';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLoadingSelector, getUsersSelector } from './selectors';
import { AppState } from './store';
import { fetchUsers, fetchUserFailed, fetchUserSuccess } from './actions';

interface UserProps {
    users: { email: string }[],
    loading: boolean,
    fetchUsers: () => Object,
    fetchUserSuccess: (users: { email: string }[]) => Object,
    fetchUserFailed: () => Object,
}

const App: React.FC<UserProps> = ({ users, loading, fetchUsers, fetchUserSuccess, fetchUserFailed }: UserProps) => {
    useEffect(() => {
        fetchUsers();
        getUsers().then(res => res.json())
            .then(res => {
                fetchUserSuccess(res.results.map((user: any) => ({ email: user.email })));
            }).catch(err => fetchUserFailed());
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

const mapDispatchToProps = {
    fetchUsers: fetchUsers,
    fetchUserSuccess: fetchUserSuccess,
    fetchUserFailed: fetchUserFailed,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
