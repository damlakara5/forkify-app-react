import React from 'react'
import Bookmarks from '../../../Bookmarks/Bookmarks'
import "./HeaderNav.css"
import NavItem from './NavItem'
const HeaderNav = () => {
  return (
    <div className='d-flex align-items-center h-100 pe-3  '>
        <NavItem  text="ADD RECIPE" icon="bi-pencil-square" />
        <NavItem  text="BOOKMARKS" icon="bi-bookmark" id="btn-bookmarks" className="nav-item_bookmarks" />
        <Bookmarks />
    </div>
  )
}

export default HeaderNav