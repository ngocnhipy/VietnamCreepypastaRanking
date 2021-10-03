import React from 'react';
import BarLoading from './BarLoading';

const Header = () => (
  <header id="main-header" className="header-one">
    <BarLoading />
    <nav id="menu-1" className="mega-menu menuFullWidth" data-color="" style={{ display: 'block' }}>
      <div className="menu-list-items">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <a className="h4 mb-0 text-white text-uppercase text-dark" href="/">Bảng xếp hạng Creepypasta Việt Nam</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
