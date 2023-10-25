import {
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "./actionTyeps";
import { initialState } from "./initState";

//Create shop reducer
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };
    case GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload,
      };
    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: state.brands.filter((data) => data._id !== payload),
      };
    default:
      return state;
  }
};

//Export shop reducer
export default shopReducer;
