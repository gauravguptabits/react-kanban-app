import axios from "axios";
import { DashboardAction, addDashAction, CollectionAction} from '../actionConstant'

export const searchCollectionAction = (board_id, search_text) => {
    return (dispatch) => {
        console.log('search_text =======',search_text)
        console.log('boardid-',board_id)
        const data = {"board_id": 334, "search_text":search_text}
        // Initial action dispatched
        dispatch({ type: CollectionAction.COLLECTION_REQUEST });
        const token = localStorage.getItem("token")
        // Prod url https://django-kanbanapp.herokuapp.com
        // Dev url http://127.0.0.1:8000

        
        return axios.get('http://127.0.0.1:8000/collections/',{
            headers: {
                Authorization: "Bearer " + token
            },
            params: data
    
        }).then(
            res => {
                console.log("api dashboard in searchAction successfully called", res.data)
                return dispatch({ type: CollectionAction.COLLECTION_SUCCESS, payload: res.data })
            },
            err => {
                console.log("dashboard api fail ERROR")
                return dispatch({ type: CollectionAction.COLLECTION_FAILURE })
            })
    }
}
