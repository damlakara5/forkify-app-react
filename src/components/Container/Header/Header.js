import React from 'react'
import logo from "../../../assets/img/logo.png"
import "./Header.css"
import HeaderNav from './Nav/HeaderNav'
import SearchPart from './SearchBar/SearchPart'

const Header = () => {
  return (
    <header className='header align-items-center py-5 px-3  d-flex justify-content-between position-relative w-100'>
        <img src={logo} className="header-img" />
        <SearchPart />
        <HeaderNav />
    </header>
  )
}

export default Header