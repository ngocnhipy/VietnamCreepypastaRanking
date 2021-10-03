import React from 'react';
import { Link } from 'react-router-dom';

const NavBreadCrumb = () => (
  <nav aria-label="breadcrumb">
    <ul className="breadcrumb">
      <li className={window.location.pathname === '/' ? 'breadcrumb-item active' : 'breadcrumb-item'}>
        <Link to="/">Top thành viên tiêu biểu</Link>
      </li>
      <li className={window.location.pathname === '/top-bai-viet' ? 'breadcrumb-item active' : 'breadcrumb-item'}>
        <Link to="/top-bai-viet">Top bài viết nổi bật</Link>
      </li>
      <li className={window.location.pathname === '/cach-tinh-diem' ? 'breadcrumb-item active' : 'breadcrumb-item'}>
        <Link to="/cach-tinh-diem">Cách tính điểm</Link>
      </li>
    </ul>
  </nav>
);

export default NavBreadCrumb;
