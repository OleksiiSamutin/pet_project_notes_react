const CategoryRow = ({icon,categoryName,active,archived}) => {
    return (
        <div className="row column_wrapper">
            <div className="column icon_wrapper">
                <div className={`icon ${icon}`}>

                </div>
            </div>
            <div className="column name">
                {categoryName}
            </div>
            <div className="column unarchived">
                {active}
            </div>
            <div className="column archived">
                {archived}
            </div>
        </div>
    )
}
export default CategoryRow;