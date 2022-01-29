import { connect } from 'react-redux'

const transformCategoryName = (name) => {
    switch (name) {
        case "tasks":
            return "Task"
        case "ideas":
            return "Idea"
        case "random":
            return "Random Thoughts"
    }
}

const Row = (props) => {
    let {key, name, text, created, category} = props
    const textMatch = text.match(/\d{1,2}\D\d{1,2}\D(\d{2}|\d{4})/g)
    return (
        <div className="row column_wrapper">
            <div className="column icon_wrapper">
                <div className={`icon ${category}`}>

                </div>
            </div>
            <div className="column name">
                {name}
            </div>
            <div className="column created">
                {created}
            </div>
            <div className="column category">
                {transformCategoryName(category)}
            </div>
            <div className="column content">
                {text}
            </div>
            <div className="column dates">
                {textMatch ? textMatch.join(", ") : ""}
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
export default connect(state => ({
    store: state,
}),undefined)(Row);