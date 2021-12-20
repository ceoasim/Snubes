import {
  ADD_INFO,
  ADD_INFO_SUCCESS,
  SAMPLE_TYPE,
} from './types';

const INITIAL_STATE = {
  addInfoLoading: false,
  info: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, addInfoLoading: true };
    case ADD_INFO_SUCCESS:
      return { ...state, addInfoLoading: false, info: action.payload };

    default:
      return state;
  }
}

export default reducer;