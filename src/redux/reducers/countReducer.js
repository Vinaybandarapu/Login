import { COUNT_DECRESE, COUNT_INCRESE } from "../constants/countConstant";

// redux/reducers/countReducer.js
const initialState = {
    count: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNT_INCRESE:
            return {
                ...state,
                count: state.count + 1,
            };
        case COUNT_DECRESE:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};