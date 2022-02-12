import { connect } from 'react-redux'
import {addNote} from '../../store/actions'
import React, { useState } from 'react';

const AddNotePopup = (props) => {
    const {store,addNote} = props
    let [text,setText] = useState("");
    let [category, setCategory] = useState("tasks");
    let [name, setName] = useState("name");
    return (
        <div className={`addNote__wrapper ${!store.showCreateNotes ? 'invisible' : ''}`}>
            <form>
                <select name="select" id="categories" required onChange={e => setCategory(e.target.value)}>
                    <option value="tasks" default selected>Tasks</option>
                    <option value="ideas">Ideas</option>
                    <option value="random">Random Thoughts</option>
                </select>
                <input type="text" placeholder="name" id="note__name" onChange={e => setName(e.target.value)}/>
                <textarea rows="20" id="note__text" onChange={e => setText(e.target.value)}></textarea>
                <button id="addNote" onClick={e => {
                    e.preventDefault();
                    let date = new Date();
                    addNote({id: store.notes.length,name,category,text,created: `${date.getDate()}/${date.getMonth() < 9 ? "0" + (date.getMonth()+1): date.getMonth()+1}/${date.getFullYear()}`})
                }}>add note</button>
            </form>
        </div>
    )
}
export default connect(state => ({
    store: state,
}),{addNote})(AddNotePopup);