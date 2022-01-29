export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

export function addNote (note){
    return {type: ADD_NOTE,note}
}

export function deleteNote(id){
    return {type: DELETE_NOTE,id}
}

export function archiveNote(id){
    return {type: ARCHIVE_NOTE, id}
}
export function editNote(text,id){
    return {type:EDIT_NOTE,text,id}
}