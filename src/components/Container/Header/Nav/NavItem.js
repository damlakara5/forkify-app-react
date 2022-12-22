import React from 'react'
import Bookmarks from '../../../Bookmarks/Bookmarks'

const NavItem = ({icon , text, className, id}) => {

  return (
    <div className={`d-flex align-items-center h-100 nav-item pe-3 w-100  ${className}`} >

      <button type="button" class="btn-modal d-flex  w-100 h-100" data-bs-toggle={id ? "" :"modal"} data-bs-target={id ? "" :"#addRecipeModal"}>
        <i className={`bi ${icon} nav-item__icon`}></i>
        <p>{text}</p>
      </button>
    </div>
  )
}

export default NavItem