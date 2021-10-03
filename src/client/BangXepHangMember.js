import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import cp1 from './images/cpvn_head1.png';
import cp2 from './images/cpvn_head2.png';
import NavBreadCrumb from './NavBreadCrumb';
import TopNotice from './TopNotice';


export default class BangXepHangMember extends Component {
    state = {
      data: [],
      // countUp: 1,
      updatedTime: null,
      // error: false,
      // success: false,
      // loading: false
    };

    componentDidMount() {
      axios.get('https://api.rqn9.com/data/1.0/cpvn_member?secret=NhiKeo1919')
        .then((response) => {
          this.setState({
            data: response.data.users,
            updatedTime: response.data.updated_time,
            // error: false,
            // success: false,
            // loading: false,
          });
        })
        .catch(() => {
          console.clear();
          this.setState({
            // error: 'Máy chủ bảo trì',
          });
        });
    }

    render() {
      const { data, updatedTime } = this.state;
      return (
        <div>
          <section className="iq-breadcrumb">
            <div className="iq-breadcrumb-info">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-7 align-self-center">
                    <h2 className="iq-fw-8 mb-3">Top thành viên tiêu biểu</h2>
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
                        {' '}
                        <Timestamp relative date={updatedTime} autoUpdate />
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
                                Thành viên
                              </th>
                              <th scope="col">
                                <span className="btn-inner--icon">
                                  <i className="ni ni-notification-70" />
                                </span>
                                {' '}
                                Bài đăng
                              </th>
                              <th scope="col">
                                <span className="btn-inner--icon">
                                  <i className="ni ni-diamond" />
                                </span>
                                {' '}
                                Bài đăng nằm trong top
                              </th>
                              <th scope="col">
                                <span className="btn-inner--icon">
                                  <i className="ni ni-chat-round" />
                                </span>
                                {' '}
                                Bình luận
                              </th>
                              <th scope="col">
                                <span className="btn-inner--icon">
                                  <i className="ni ni-favourite-28" />
                                </span>
                                {' '}
                                Điểm
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.length !== 0 ? data.map(topUser => (
                              <tr>
                                <th scope="row">
                                  <div className="media align-items-center">
                                    <img src={topUser.ss_avatar !== null ? topUser.ss_avatar : `https://graph.facebook.com/${topUser.fb_id}/picture?type=square`} style={{ 'padding-right': '5px', width: '50px', 'border-radius': '50%' }} alt="" />
                                    <div className="media-body">
                                      <span className="mb-0 text-sm">{topUser.fb_name}</span>
                                    </div>
                                  </div>
                                </th>
                                <td>{topUser.post}</td>
                                <td>{topUser.post_top}</td>
                                <td>{topUser.cmt}</td>
                                <td>{topUser.point}</td>
                              </tr>
                            )) : <tr><td colSpan="5">KHÔNG CÓ DỮ LIỆU</td></tr>}
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
