import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function ConfigureStore(intialState){
    const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //add support for redux devtools 
    return createStore(
        rootReducer,
        intialState,
        composeEnchancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //warn us if we mutate state
    );

    //redux-middle to enhance redux functionality
}