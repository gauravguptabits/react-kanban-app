import { UserActions } from '../actionConstant';

const userInitialState = {
    isAuthenticated: false,
    name: null,
    isLoading: null,
    error: {
        errorMsg: '',
        hasError: false
    }
}

const userReducer = (state = userInitialState, action = { type: '' }) => {
    let new_state = {
        ...state
    };
    switch (action.type) {
        case UserActions.GUEST_LOGIN_REQUEST:
            new_state.isAuthenticated = false;
            new_state.isLoading = true;
            new_state.error = {
                errorMsg: '',
                hasError: false
            }
            // API call
            break;
        case UserActions.LOGIN_SUCCESS:
            new_state.isAuthenticated = true;
            new_state.name = action.data.name;
            new_state.isLoading = false;
            new_state.token = action.data.access;
            new_state.error = {
                errorMsg: '',
                hasError: false
            }
            localStorage.setItem("token", action.data.access)
            break;

        case UserActions.GUEST_LOGIN_FAILURE:
            new_state.isAuthenticated = false;
            new_state.isLoading = false;
            new_state.name = null;
            new_state.error = {
                errorMsg: 'Unable to login',
                hasError: true
            }
            break;
        default:
            break;
    }
    return new_state;
};

export default userReducer;
