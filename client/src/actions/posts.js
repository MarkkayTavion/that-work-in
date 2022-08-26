import * as api from '../api';

//action creators retuning actions 
export const getPosts =() => async (dispatch) => {
    try {
        const { data } = await api.getPosts();

        dispatch({ type: 'Get_ALL', payload: [] })
    } catch (error) {
        console.log(error.message);
    } 
}