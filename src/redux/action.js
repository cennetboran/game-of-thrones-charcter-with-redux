import axios from "axios";
import * as types from "./actionTypes";

const fetchMembersRequest = () => ({
  type: types.FETCH_MEMBERS_REQUEST,
});

const fetchMembersSuccess = (members) => ({
  type: types.FETCH_MEMBERS_SUCCESS,
  payload: members,
});

const fetchMembersFailure = (error) => ({
  type: types.FETCH_MEMBERS_FAILURE,
  payload: error,
});

export function fetchMembers() {
  return function (dispatch) {
    dispatch(fetchMembersRequest());
    axios
      .get("https://api.gameofthronesquotes.xyz/v1/houses")
      .then((response) => {
        const members = response.data;
        dispatch(fetchMembersSuccess(members));
      })
      .catch((error) => {
        dispatch(fetchMembersFailure(error));
      });
  };
}
