import {ADD_NOTE, DELETE_NOTE, NOTES_LOADED} from '../constants/ActionTypes';
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      const note = action.payload;
      return [
        {
          id: note.id,
          subject: note.subject,
          message: note.message,
          creator: note.creator,
          dateTime: note.dateTime
        },
        ...state
      ];
    }

    case DELETE_NOTE: return state.filter(note => note.id !== action.payload);

    case NOTES_LOADED: {
      console.log(NOTES_LOADED, action);
      return action.payload;
    }

    default: return state;
  }
}
