import * as actions from "../actions";

const initialState = {
    loading: false,
    data: []
};

const startLoading = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const droneLocationsReceived = (state, action) => {
    return {
        ...state,
        data: [ ...action.payload.data],
        loading: false
    };
};

const errorLoadingDroneLocations = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const handlers = {
    [actions.FETCH_DRONE_LOCATIONS]: startLoading,
    [actions.FETCH_DRONE_LOCATIONS_SUCCESS]: droneLocationsReceived,
    [actions.FETCH_DRONE_LOCATIONS_FAILURE]: errorLoadingDroneLocations
};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};