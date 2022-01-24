
import Row from "../Row"
import RowHeader from "../RowHeader"

const NotesTable = () => {
    return (
        <div className="notes-table">
            <RowHeader/>
            <Row/>
            <Row/>
            <button className="createNote" id="createNote">Create note</button>
        </div>
    )
}
export default NotesTable