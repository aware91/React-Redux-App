import {
    FETCHING_NUMB_START,
    FETCHING_NUMB_SUCCESS,
    FETCHING_NUMB_FAILURE
    } from "../actions";

const initialState = {
    number: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NUMB_START:
            return {
            ...state,
            isFetching: true
            };
        case FETCHING_NUMB_SUCCESS:
            return {
            ...state,
            isFetching: false,
            number: action.payload
            };
        case FETCHING_NUMB_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: "hit an error"
            };
        default:
            return state;
        }
};
