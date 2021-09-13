import axios from "axios";
import {
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_CREATE_FAIL,
} from "../constants/notesConstants";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/notes", config);

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNoteAction =
  (title, content, category) => async (dispatch, getState) => {
    console.log({ title });
    try {
      dispatch({ type: NOTES_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      console.log({ userInfo });
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/notes/create",
        {
          title,
          content,
          category,
        },
        config
      );
      console.log({ data });
      dispatch({
        type: NOTES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOTES_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
