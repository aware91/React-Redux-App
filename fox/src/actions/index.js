import axios from "axios";

export const FETCHING_NUMB_START = "FETCHING_NUMB_START";
export const FETCHING_NUMB_SUCCESS = "FETCHING_NUMB_SUCCESS";
export const FETCHING_NUMB_FAILURE = "FETCHING_NUMB_FAILURE";

export const getNumber = () => dispatch => {
    dispatch({ type: FETCHING_NUMB_START });

    axios
        .get("http://numbersapi.com/random/year")
        .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_NUMB_SUCCESS, payload: res.data });
        })
        .catch(err => {
        console.log(err);
    });
};
