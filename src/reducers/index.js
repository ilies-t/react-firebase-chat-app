import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import generalReducer from './general.reducer';
import chatReducer from './chat.reducer';

const allReducers = combineReducers({
    general : generalReducer,
    chat : chatReducer,
    routing : routerReducer
});

export default allReducers;
