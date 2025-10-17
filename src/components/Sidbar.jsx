import {NavLink} from 'react-router-dom'
function Sidbar() {
  return (
    <aside className="sidebar">
      <form className="sidebar-list">
        <NavLink to="/add-product"> <button className='buttonsidbar'> Add Product</button></NavLink>
        <NavLink to="/product-list"> <button className='buttonsidbar'>Product List</button></NavLink>
        <NavLink to="/dashboard"> <button className='buttonsidbar'>Dashboard</button></NavLink>
      </form>
    </aside>
  )
}
export default Sidbar