import React from "react";
import {Link} from "react-router-dom";
import Search from "../Search/Search";
import './Header.css'
import logo from '../assets/logo-gray.png'

const Header = () => {
  return (
      <header className={'header'}>
          <div className={'container'}>
              <div className={'headerWrapper'}>
                  <div>
                      <Link to={'/'} >
                          <img className={'logo'} src={logo} alt=""/>
                      </Link>
                  </div>
                  <Link to={'/'} className={'linkH'}>Home</Link>
                  <div className={'headerInner'}>
                      <Search />
                  </div>
              </div>

          </div>
      </header>
  )
}

export default Header