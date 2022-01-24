const AddNotePopup = () => {
    return (
        <div className="addNote__wrapper invisible">
            <form>
                <select name="select" id="categories" required>
                    <option value="tasks">Tasks</option>
                    <option value="ideas" selected>Ideas</option>
                    <option value="random">Random Thoughts</option>
                </select>
                <input type="text" placeholder="name" id="note__name"/>
                <textarea rows="20" id="note__text"></textarea>
                <button id="addNote">add note</button>
            </form>
        </div>
    )
}
export default AddNotePopup