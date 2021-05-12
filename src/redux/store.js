import {createStore, combineReducers} from 'redux';
import numberReducer from './numberReducer';

const rootReducer = combineReducers({
    numberReducer
})

export default createStore(rootReducer)