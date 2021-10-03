import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import cp1 from './images/cpvn_ran2.png';
import cp2 from './images/cpvn_head2.png';
import NavBreadCrumb from './NavBreadCrumb';
import TopNotice from './TopNotice';


export default class CachTinhDiem extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <section className="iq-breadcrumb">
          <div className="iq-breadcrumb-info">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-7 align-self-center">
                  <h2 className="iq-fw-8 mb-3">Cách tính điểm</h2>
                  <NavBreadCrumb />
                </div>
                <div className="col-md-5">
                  <img src={cp1} className="img-fluid" alt="" width="70%" />
                </div>
              </div>
            </div>
          </div>
          <div className="iq-breadcrumb-img">
            <img src={cp2} className="img-fluid breadcrumb-two" alt="" />
          </div>
        </section>
        <div className="main-content">
          <section className="iq-blogs">
            <div className="container">
              <TopNotice />
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="section-title">
                    <p className="mb-0 text-uppercase iq-fw-5 iq-ls-2">
                      Cập nhật lần cuối:
                      <Timestamp relative date="1589300000" autoUpdate />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card shadow">
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">
                              <span className="btn-inner--icon">
                                <i className="ni ni-circle-08" />
                              </span>
                              {' '}
                              Tên
                            </th>
                            <th scope="col">
                              <span className="btn-inner--icon">
                                <i className="ni ni-notification-70" />
                              </span>
                              {' '}
                              Điểm
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="mb-0 text-sm">Bài đăng trong top</span>
                                </div>
                              </div>
                            </th>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="mb-0 text-sm">Bài đăng</span>
                                </div>
                              </div>
                            </th>
                            <td>5</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <span className="mb-0 text-sm">Bình luận</span>
                                </div>
                              </div>
                            </th>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
