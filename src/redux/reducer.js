import * as types from "./actionTypes";
const initialState = {
  members: [],
  error: null,
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload,
      };

    case types.FETCH_MEMBERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};