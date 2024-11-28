import handleCart from './handleCart'
import { combineReducers } from "redux";
import userReducer from './userReducer';
const rootReducers = combineReducers({
    handleCart, userReducer
})
export default rootReducers