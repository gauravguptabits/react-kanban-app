import axios from 'axios';
import { UserActions } from '../actionConstant';
import login from '../screens/login';


export const getUserAction = (user) => {
    return (dispatch) => {
        // Initial action dispatched
        dispatch({ type: UserActions.GUEST_LOGIN_REQUEST });
        // Return promise with success and failure actions
        console.log('API Called');
        return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
            todos => {
                console.log('API Success')

                return dispatch({ type: UserActions.GUEST_LOGIN_SUCCESS, data: { name: 'Guest' } })
            },
            err => {
                console.log('API Failure');
                return dispatch({ type: UserActions.GUEST_LOGIN_FAILURE, error: err })
            }
        );
    };
};

export const loginAction = (username, password) => {
    return (dispatch) => {
        // Initial action dispatched
        dispatch({ type: UserActions.GUEST_LOGIN_REQUEST });
        // Return promise with success and failure actions
        console.log('API Called');
        return axios.post('https://django-kanbanapp.herokuapp.com/user/login/', {
            username,
            password
        }).then(
            res => {
                console.log('API Success', res)
                const response = res.data.access;
                return dispatch({ type: UserActions.LOGIN_SUCCESS, data: { token: response } })
                // return dispatch({ type: UserActions.GUEST_LOGIN_SUCCESS, data: { name: 'Guest' } })
            },
            err => {
                console.log('API Failure');
                return dispatch({ type: UserActions.GUEST_LOGIN_FAILURE, error: err })
            }
        );
    };
};


