import * as actions from './ActionTypes';

export function addRating(rating){
    return { type:actions.ADD_RATING,rating };
}

//export default addRating;