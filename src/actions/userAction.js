import axios from 'axios';
import { UserActions } from '../actionConstant';

const API_HOST ='https://jsonplaceholder.typicode.com/todos/1'

export const getUserAction = (user) => {
    return (dispatch) => {
        // Initial action dispatched
        dispatch({ type: UserActions.GUEST_LOGIN_REQUEST });
        // Return promise with success and failure actions
        console.log('API Called');
        const data = {
            'username': 'harsh',
            'password': 'test@123'
        }
        return axios.get(`${API_HOST}`, data).then(
            response => {
                console.log('API Success', response)
                response = {'name': 'Guest'}
                return dispatch({ type: UserActions.GUEST_LOGIN_SUCCESS, data: response })
            },
            err => {
                console.log('API Failure');
                return dispatch({ type: UserActions.GUEST_LOGIN_FAILURE, error: err })
            }
        );
    };
};


