import CategoryRow from '../CategoryRow'

const CategoryTable = (props) => {
    const {categories} = props
    const {icon, categoryName} = categories
    return (
        <div class="category-table">
            <div class="row header">
                <div class="icon_wrapper">

                </div>
                <div class="name">
                    Note Category
                </div>
                <div class="unarchived">
                    Active
                </div>
                <div class="archived">
                    Archived
                </div>
            </div>
            {
                categories.map(({icon,categoryName}) => <CategoryRow icon={icon} categoryName={categoryName} archived="5" active="6"/>)
            }
        </div>
    )
}
export default CategoryTable;
