import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLoadingSelector, getUsersSelector } from './selectors';
import { AppState } from './store';
import { fetchUsersActionCreator } from './thunk';

interface ThunkUserProps {
    users: { email: string }[],
    loading: boolean,
    fetchUsers: any
}

const AppWithThunk: React.FC<ThunkUserProps> = ({ users, loading, fetchUsers }: ThunkUserProps) => {
    useEffect(() => {
        fetchUsers();
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

const mapDispatchToProps =  {
    fetchUsers: fetchUsersActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithThunk);
