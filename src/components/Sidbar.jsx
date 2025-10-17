import {NavLink} from 'react-router-dom'
function Sidbar() {
  return (
    <aside className="sidebar">
      <form className="sidebar-list">
        <NavLink to="/add-product"> <button> Add Product</button></NavLink>
        <NavLink to="/product-list"> <button>Product List</button></NavLink>
      </form>
    </aside>
  )
}
export default Sidbar