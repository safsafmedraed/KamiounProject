import {WORDS_ERROR,GET_WORDS} from "../actions/types";

const initialState = {
    dic: [],
    loading: true,

}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_WORDS:
            return {
                ...state,
                dic: payload,
                loading: false
            }
       
        case WORDS_ERROR:
            return {
                ...state,
                loading: false

            }
        default:
            return state;
    }
}
