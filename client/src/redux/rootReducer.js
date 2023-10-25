import { combineReducers } from "redux";
import shopReducer from "./Shop/shopReducer";

//Create root reducer
const rootReducer = combineReducers({
  shop: shopReducer,
});

// Export Reducer
export default rootReducer;
