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
const fetchCharacterRequest = () => ({
  type: types.FETCH_CHARACTER_REQUEST,
});

const fetchCharacterSuccess = (character) => ({
  type: types.FETCH_CHARACTER_SUCCESS,
  payload: character,
});

const fetchCharacterFailure = (error) => ({
  type: types.FETCH_CHARACTER_FAILURE,
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
export function fetchCharacters() {
  return function (dispatch) {
    dispatch(fetchCharacterRequest());
    axios
      .get("https://api.gameofthronesquotes.xyz/v1/characters")
      .then((response) => {
        const character = response.data;
        dispatch(fetchCharacterSuccess(character));
        console.log(response);
      })
      .catch((error) => {
        dispatch(fetchCharacterFailure(error));
      });
  };
}
