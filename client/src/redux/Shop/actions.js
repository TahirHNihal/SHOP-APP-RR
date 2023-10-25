import axios from "axios";
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "./actionTyeps";

//Get All Brands Actions
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/brand")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({
          type: GET_BRAND_FAILED,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({ type: GET_BRAND_FAILED, payload: error.response.data.message });
  }
};
//Craete Brand Actions
export const createBrand = (data) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:5050/api/v1/product/brand", data)
      .then((res) => {
        dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_BRAND_FAILED,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: CREATE_BRAND_FAILED,
      payload: error.response.data.message,
    });
  }
};
//Delete Brand Actions
export const deleteBrand = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BRAND_FAILED,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAILED,
      payload: error.response.data.message,
    });
  }
};
