import {
  NOTES_LIST_REQUEST,
  NOTES_LIST_FAIL,
  NOTES_LIST_SUCCESS,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_FAIL,
  NOTES_CREATE_SUCCESS,
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
  NOTES_UPDATE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_SHARE_REQUEST,
  NOTES_SHARE_SUCCESS,
  NOTES_SHARE_FAIL,
  SHARED_NOTES_LIST_REQUEST,
  SHARED_NOTES_LIST_SUCCESS,
  SHARED_NOTES_LIST_FAIL,
} from "../constants/notesConstants";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return {
        loading: true,
      };
    case NOTES_LIST_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
      };
    case NOTES_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_CREATE_REQUEST:
      return {
        loading: true,
      };
    case NOTES_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case NOTES_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const noteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case NOTES_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case NOTES_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return {
        loading: true,
      };
    case NOTES_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case NOTES_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};

export const noteShareReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_SHARE_REQUEST:
      return {
        loading: true,
      };
    case NOTES_SHARE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case NOTES_SHARE_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};

export const sharedNoteListReducer = (state = { sharedNotes: [] }, action) => {
  switch (action.type) {
    case SHARED_NOTES_LIST_REQUEST:
      return {
        loading: true,
      };
    case SHARED_NOTES_LIST_SUCCESS:
      return {
        loading: false,
        sharedNotes: action.payload,
      };
    case SHARED_NOTES_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
