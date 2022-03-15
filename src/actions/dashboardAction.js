import axios from "axios";
import { DashboardAction, addDashAction } from '../actionConstant'

export const getDashboardAction = () => {
    return (dispatch) => {

        // Initial action dispatched
        dispatch({ type: DashboardAction.DASHBOARD_REQUEST });
        const token = localStorage.getItem("token")
        return axios.get('https://django-kanbanapp.herokuapp.com/boards/', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(
            res => {
                // console.log("api dashboard successfully called", res.data)
                return dispatch({ type: DashboardAction.DASHBOARD_SUCCESS, payload: res.data })
            },
            err => {
                console.log("dashboard api fail ERROR")
                return dispatch({ type: DashboardAction.DASHBOARD_FAILURE })
            })
    }
}

export const AddDashboard = (title, description) => {
    return (dispatch) => {
        // Initial action dispatched
        dispatch({ type: addDashAction.ADD_DASH_REQUEST });
        const token = localStorage.getItem("token")
        return axios.post('https://django-kanbanapp.herokuapp.com/boards/',{
            title, description},
             {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(
            res => {
                // console.log("api dashboard successfully called", res.data)
                return dispatch({ type: addDashAction.ADD_DASH_SUCCESS, payload: res.data })
            },
            err => {
                console.log("dashboard api fail ERROR")
                return dispatch({ type: addDashAction.ADD_DASH_FAILURE })
            })
    }
    
}

