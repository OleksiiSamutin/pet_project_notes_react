import Row from "../Row";
import RowHeader from "../RowHeader";
import { connect } from "react-redux";
import { addNote,showPopup } from "../../store/actions.js";
const NotesTable = (props) => {
  const { store, addNote,showPopup } = props;
  console.log(store);
  return (
    <div className="notes-table">
      <RowHeader />
      {store.notes.map((rowData) => {
        const { id, name, text, created, category } = rowData;
        return (
          <Row
            key={id}
            name={name}
            text={text}
            created={created}
            category={category}
          />
        );
      })}

      <button
        className="createNote"
        id="createNote"
        onClick={(e) => {
          showPopup();
        }}
      >
        Create note
      </button>
    </div>
  );
};
export default connect(
  (state) => ({
    store: state,
  }),
  {showPopup}
)(NotesTable);
