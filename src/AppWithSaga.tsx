import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLoadingSelector, getUsersSelector } from './selectors';
import { AppState } from './store';
import { fetchUsers } from './actions';

interface SagaUserProps {
    users: { email: string }[],
    loading: boolean,
    fetchUsers: () => Object,
}

const AppWithSaga: React.FC<SagaUserProps> = ({ users, loading, fetchUsers }: SagaUserProps) => {
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
    fetchUsers: fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithSaga);
