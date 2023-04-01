import { ADD_FAV, REMOVE_FAV,FILTER, ORDER_CARD } from "./actions-type";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
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