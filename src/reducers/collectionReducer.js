import { DashboardAction, addDashAction, CollectionAction } from '../actionConstant'


const collectionInitialState = {
    collectionData: null,
    isLoading: null,
}

const collectionReducer = (state = collectionInitialState, Action) => {
    const New_state = {
        ...state,
    }

    switch (Action.type) {
        case CollectionAction.COLLECTION_REQUEST:
            New_state.isLoading = true
            break;

        case CollectionAction.COLLECTION_SUCCESS:
            // console.log("DashboardAction.DASHBOARD_SUCCESS",Action)
            // [{name: '', description: ''}, {name: '', description: ''}]
            // dashboardData = List of boards 
            New_state.collectionData = Action.payload;
            New_state.isLoading = false
            break;

        case CollectionAction.COLLECTION_FAILURE:
            New_state.error = "unable to see collectionboard"
            New_state.isLoading = false
            break;


        default:
            break;
    }
    return New_state;
}
export default collectionReducer


