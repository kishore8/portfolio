//root reducer which compoeses different reducers together

import {combineReducers} from 'redux';
import ratings from './UserReducer'; //as it is a default export we name to anything 
//here i named to ratings

const rootReducer = combineReducers({
    ratings
})

export default rootReducer;