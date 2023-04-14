import { ADD_FAV, REMOVE_FAV,FILTER, ORDER_CARD } from "./actions-type";
import axios from "axios";

// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character,
//     };
// };
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};


// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     };
// };

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};


export const filterCards = (gender)=>{
    return{
        type: FILTER,
        payload: gender,
    }
}

export const orderCard = (id) =>{
    return {
        type: ORDER_CARD, 
        payload: id,
    }
}