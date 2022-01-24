const Row = (props) => {

    return (

    <div className="row column_wrapper">
        <div className="column icon_wrapper">
            <div className="icon tasks">

            </div>
        </div>
        <div className="column name">
            Shopping list
        </div>
        <div className="column created">
            Created
        </div>
        <div className="column category">
            Category
        </div>
        <div className="column content">
            Content
        </div>
        <div className="column dates">
            Dates
        </div>
        <div className="buttons">
            <div className="buttons__wrapper">
                <div className="edit"></div>
                <div className="archive"></div>
                <div className="delete"></div>
            </div>
        </div>
    </div>
    )
}
export default Row;