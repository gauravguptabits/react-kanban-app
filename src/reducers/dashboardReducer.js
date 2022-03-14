import { DashboardAction, addDashAction } from '../actionConstant'


const dashboardInitialState = {
    dashboardData: null,
    isLoading: null,
    AddDashBoard: null
}

const dashboardReducer = (state = dashboardInitialState, Action) => {
    const New_state = {
        ...state,
    }

    switch (Action.type) {
        case DashboardAction.DASHBOARD_REQUEST:
            New_state.isLoading = true
            break;

        case DashboardAction.DASHBOARD_SUCCESS:
            // console.log("DashboardAction.DASHBOARD_SUCCESS",Action)
            // [{name: '', description: ''}, {name: '', description: ''}]
            // dashboardData = List of boards 
            New_state.dashboardData = Action.payload;
            New_state.isLoading = false
            break;
        case DashboardAction.DASHBOARD_FAILURE:
            New_state.error = "unable to see dashboard"
            New_state.isLoading = false
            break;

        //Add Dashboard Reducer    

        case addDashAction.ADD_DASH_REQUEST:
            New_state.isLoading = true;
            New_state.AddDashBoard = false;
            break;

        case addDashAction.ADD_DASH_SUCCESS:
            // console.log("DashboardAction.DASHBOARD_SUCCESS",Action)
            // Action.Payload = {title: '', description: ''}
            // dashboarData = Object of board
            // ...NewState.dashboardData ==> [{'n': 'G'}, {'n': 'H'}] ==> [{'n': 'G'}, {'n': 'H'}, {'n': 'A'}]
            // dashboardData = [...NewState.dashboardData, Action.Payload]
            // dasboardData.append(Action.Payload)
            New_state.dashboardData = [...New_state.dashboardData, Action.payload];
            New_state.isLoading = false;
            New_state.AddDashBoard = true;
            break;

        case addDashAction.ADD_DASH_FAILURE:
            New_state.error = "unable to see dashboard";
            New_state.isLoading = false;
            break;



        default:
            break;
    }
    return New_state;
}
export default dashboardReducer


