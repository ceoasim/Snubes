import {
  SAMPLE_TYPE,
} from './types';

const INITIAL_STATE = {
  sampleReducerLoading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_TYPE:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}

export default reducer;