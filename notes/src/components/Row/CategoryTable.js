import CategoryRow from './CategoryRow'

<CategoryTable categories={['cat1','cat2']}/>

const CategoryTable = (props) => {
    const {categories} = props
    return (
        <div className="category-table">
            <div className="row header">
                <div className="icon_wrapper">

                </div>
                <div className="name">
                    Note Category
                </div>
                <div className="created">
                    Active
                </div>
                <div className="created">
                    Archive
                </div>
            </div>
            <div>
            {
                categories.map(category => <CategoryRow category={category}/>)
            }
            </div>
        </div>
    )
}
export default CategoryTable;
