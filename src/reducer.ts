import { Action, FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from './actions';

export interface AppState {
    users: { email: string }[];
    loading: boolean;
}

const initialState: AppState = {
    users: [],
    loading: false
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            console.log('FETCH_USER_SUCCESS', action.payload)
            return {
                ...state,
                loading: false,
                users: [...action.payload]
            };
        case FETCH_USER:
            console.log('FETCH_USER')
            return {
                ...state,
                loading:true
            };

        case FETCH_USER_FAILED:
            console.log('FETCH_USER_FAILED')
            return {
                ...state,
                loading:false
            };

        default:
            return state;
    }
};

export default reducer;
