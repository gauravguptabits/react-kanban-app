import { DashboardAction, addDashAction } from '../actionConstant'


const dashboardInitialState = {
    dashboardData: null,
    isLoading: null
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
            New_state.dashboardData = Action.payload;
            New_state.isLoading = false
            break;

        case DashboardAction.DASHBOARD_FAILURE:
            New_state.error = "unable to see dashboard"
            New_state.isLoading = false
            break;

        default:
            break;
    }
    return New_state;
}
export default dashboardReducer


