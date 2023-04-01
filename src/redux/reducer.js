import { ADD_FAV,REMOVE_FAV,FILTER, ORDER_CARD } from "./actions-type";

const initialState={
    myFavorites:[],
    allCharacters:[],   
    allFavs: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
        // Utilizamos el operador spread para copiar el estado anterior y agregamos el nuevo personaje a myFavorites
        return {
            ...state,
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.myFavorites, action.payload]
        };
        
        case REMOVE_FAV: 
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char =>char.id !== action.payload)
            }
        case FILTER:
            
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload)    
            return{
                ...state,
                myFavorites:allCharsFiltered
                }
        case ORDER_CARD:
            const allCharsOrdered = [...state.allCharacters];
            allCharsOrdered.sort((a,b)=>
            action.payload === "Ascendente" ? a.id -b.id : b.id -a.id
            );
            return{
                ...state,
                myFavorites: allCharsOrdered,

            }              
        default:
            return{
                ...state
            }
    }
}

export default reducer;