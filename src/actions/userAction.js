import axios from 'axios';
import { UserActions } from '../actionConstant';

export const loginAction = (username, password) => {
    return (dispatch) => {
        // Initial action dispatched
        dispatch({ type: UserActions.GUEST_LOGIN_REQUEST });
        // Return promise with success and failure actions
        // console.log('API Called');
        return axios.post('https://django-kanbanapp.herokuapp.com/user/login/', {
            username,
            password
        }).then(
            res => {
                // console.log('LOGIN NAME API Success', res.data)
                res.data.name="Harsh"
                return dispatch({ type: UserActions.LOGIN_SUCCESS, data: res.data  })
                // return dispatch({ type: UserActions.GUEST_LOGIN_SUCCESS, data: { name: 'Guest' } })
            },
            err => {
                console.log('API Failure');
                return dispatch({ type: UserActions.GUEST_LOGIN_FAILURE, error: err })
            }
        );
    };
};


