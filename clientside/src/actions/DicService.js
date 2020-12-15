import axios from 'axios';

import { GET_WORDS,WORDS_ERROR } from './types'

export const getwords = (language,formData) => async dispatch => {
 
    try {
       
        const res = await axios.get(`/dic/${language}/${formData}`)
        dispatch({
            type: GET_WORDS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: WORDS_ERROR,

        });
    }

}
