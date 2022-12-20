import { connect } from 'react-redux';

const initialState ={
    cardData: []
}
export default function cardItems(state,action){
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cardData: action.data
            }

            default:
                return state 

    }
        
}

