import CategoryRow from '../CategoryRow'

const CategoryTable = (props) => {
    const {categories} = props
    const {icon, categoryName} = categories
    return (
        <div className="category-table">
            <div className="row header">
                <div className="icon_wrapper">

                </div>
                <div className="name">
                    Note Category
                </div>
                <div className="unarchived">
                    Active
                </div>
                <div className="archived">
                    Archived
                </div>
            </div>
            {
                categories.map(({icon,categoryName},i) => <CategoryRow key={i} icon={icon} categoryName={categoryName} archived="5" active="6"/>)
            }
        </div>
    )
}
export default CategoryTable;
