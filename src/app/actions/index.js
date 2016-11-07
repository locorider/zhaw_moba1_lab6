import * as types from '../constants/ActionTypes';

export function addNote(note) {
  return {type: types.ADD_NOTE, payload: note};
}

export function deleteNote(id) {
  return {type: types.DELETE_NOTE, payload: id};
}

export function notesLoaded(notes) {
  return {type: types.NOTES_LOADED, payload: notes};
}
