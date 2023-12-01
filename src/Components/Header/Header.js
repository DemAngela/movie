import React from "react";
import {Link} from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
      <header className={'header'}>
          <div className={'container'}>
              <div className={'headerWrapper'}>
                  <Link to={'/'} className={'linkH'}>Home</Link>
                  <Link to={'/movie'}>Movie</Link>
              </div>
              <div className={'headerInner'}>
                <Search />
              </div>
          </div>
      </header>
  )
}

export default Header