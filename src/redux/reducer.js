import * as types from "./actionTypes";
const initialState = {
  members: [],
  students: [],
  error: null,
  loading: false,
  character: [],
  spells: [],
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
    case types.FETCH_CHARACTER_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.payload,
      };
    case types.FETCH_CHARACTER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case types.FETCH_STUDENT_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };
    case types.FETCH_STUDENT_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case types.FETCH_SPELLS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_SPELLS_SUCCESS:
      return {
        ...state,
        loading: false,
        spells: action.payload,
      };
    case types.FETCH_SPELLS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
