import { combineReducers } from "redux";
import cartReducer from "./CartReducer";

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducers = (state, action) => {
  return reducers(state, action);
};

export default rootReducers;
