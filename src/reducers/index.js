import userReducer from './user';
import dashboardReducer from './dashboardReducer';
import collectionReducer from './collectionReducer'

const reducer = {
    user: userReducer,
    dashboardReducer: dashboardReducer,
    collectionReducer: collectionReducer
};
export default reducer;