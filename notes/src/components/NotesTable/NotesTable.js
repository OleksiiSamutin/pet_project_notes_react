
import Row from "../Row"
import RowHeader from "../RowHeader"
import { connect } from 'react-redux'
const NotesTable = (props) => {
    
    const {store} = props
    console.log(store)
    return (
        <div className="notes-table">
            <RowHeader/>
            {store.map( rowData => {
                const {id,name,text,created,category} = rowData
                return <Row key={id} name={name} text={text} created={created} category={category}/>
            })}
            
            <button className="createNote" id="createNote">Create note</button>
        </div>
    )
}
export default connect(state => ({
    store: state,
}),undefined)(NotesTable);