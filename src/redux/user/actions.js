import {
  ADD_INFO,
  ADD_INFO_SUCCESS,
} from "./types";

export const addInfo = (companyName, name, email, phone) => ({
  type: ADD_INFO,
  payload: {
    companyName, name, email, phone
  }
});
export const addInfoSuccess = (data) => ({
  type: ADD_INFO_SUCCESS,
  payload: data
});
