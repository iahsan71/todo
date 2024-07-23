import { combineReducers } from "redux";
import amountReducers from "./AmountReducers";
const reducers = combineReducers({
amount : amountReducers
})
export default reducers;