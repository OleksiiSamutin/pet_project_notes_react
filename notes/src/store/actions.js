export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SHOW_POPUP = "SHOW_POPUP"

export const showPopup = (note) => {
    return {type: SHOW_POPUP,note,showCreateNotes:true}
}
export const addNote = (note) => {
    return {type: ADD_NOTE,note,showCreateNotes:true}
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