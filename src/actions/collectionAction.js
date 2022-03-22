import axios from "axios";
import { DashboardAction, addDashAction, CollectionAction} from '../actionConstant'

export const getCollectionAction = (board_id) => {
    return (dispatch) => {
        console.log('boardid-',board_id)
        const data = {"board_id": board_id}
        // Initial action dispatched
        dispatch({ type: CollectionAction.COLLECTION_REQUEST });
        const token = localStorage.getItem("token")
        // Prod url https://django-kanbanapp.herokuapp.com
        // Dev urlhttp://127.0.0.1:8000

        return axios.get('https://django-kanbanapp.herokuapp.com/collections/',{
            headers: {
                Authorization: "Bearer " + token
            },
            params: data
    
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
