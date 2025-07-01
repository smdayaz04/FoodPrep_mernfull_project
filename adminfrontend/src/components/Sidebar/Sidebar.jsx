import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">

       <NavLink
          to='/add'
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.add_icon} alt="Add icon" />
          <p>Add Items</p>
        </NavLink>

       <NavLink
          to='/list'
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.list_icon} width="27px" alt="List icon" />
          <p>List Items</p>
        </NavLink>

          <NavLink
          to='/orders'
          className={({ isActive }) =>
            isActive ? 'sidebar-option active' : 'sidebar-option'
          }
        >
          <img src={assets.order_icon} alt="Orders icon" />
          <p>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
/* <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>*/
