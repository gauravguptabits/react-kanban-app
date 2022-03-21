import axios from "axios";
import { DashboardAction, addDashAction, CollectionAction} from '../actionConstant'

export const getCollectionAction = () => {
    return (dispatch) => {

        // Initial action dispatched
        dispatch({ type: CollectionAction.COLLECTION_REQUEST });
        const token = localStorage.getItem("token")
        return axios.get('http://127.0.0.1:8000/collections/', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(
            res => {
                // console.log("api dashboard successfully called", res.data)
                return dispatch({ type: CollectionAction.COLLECTION_SUCCESS, payload: res.data })
            },
            err => {
                console.log("dashboard api fail ERROR")
                return dispatch({ type: CollectionAction.COLLECTION_FAILURE })
            })
    }
}
