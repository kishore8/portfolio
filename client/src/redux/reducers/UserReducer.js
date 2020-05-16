import * as types from '../actions/ActionTypes';


export default function UserReducer(state = [],action){
    switch(action.type){
        case types.ADD_RATING:
            //state.push(action.rating); //wrong...we are mutating state
            return [...state,{...action.rating}];

        default:
            return state;
    }
}