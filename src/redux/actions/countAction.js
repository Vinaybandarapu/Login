import { COUNT_DECRESE, COUNT_INCRESE } from "../constants/countConstant";

// redux/actions/countAction.js
export const increment = () => {
    return {
        type: COUNT_INCRESE,
    };
};

export const decrement = () => {
    return {
        type: COUNT_DECRESE,
    };
};