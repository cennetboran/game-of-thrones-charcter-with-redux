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

const fetchStudentRequest = () => ({
  type: types.FETCH_STUDENT_REQUEST,
});

const fetchStudentSuccess = (students) => ({
  type: types.FETCH_STUDENT_SUCCESS,
  payload: students,
});

const fetchStudentFailure = (error) => ({
  type: types.FETCH_STUDENT_FAILURE,
  payload: error,
});
const fetchSpellsRequest = () => ({
  type: types.FETCH_SPELLS_REQUEST,
});

const fetchSpellsSuccess = (spells) => ({
  type: types.FETCH_SPELLS_SUCCESS,
  payload: spells,
});

const fetchSpellsFailure = (error) => ({
  type: types.FETCH_SPELLS_FAILURE,
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
export function fetchStudents() {
  return function (dispatch) {
    dispatch(fetchStudentRequest());
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        const student = response.data;
        dispatch(fetchStudentSuccess(student));
        console.log(response);
      })
      .catch((error) => {
        dispatch(fetchStudentFailure(error));
      });
  };
}
export function fetchSpells() {
  return function (dispatch) {
    dispatch(fetchSpellsRequest());
    axios
      .get("https://hp-api.onrender.com/api/spells")
      .then((response) => {
        const spells = response.data;
        dispatch(fetchSpellsSuccess(spells));
        console.log(response);
      })
      .catch((error) => {
        dispatch(fetchSpellsFailure(error));
      });
  };
}
