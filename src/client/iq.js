
import React, { Component } from 'react';
import axios from 'axios';

export default class iq extends Component {
  constructor(props) {
    super(props);

    // const _isMounted = false;

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.rqn9.com/data/1.0/cpvn_stats?secret=NhiKeo1919')
      .then((response) => {
        this.setState({
          data: response.data,
          // error: false,
          // success: false,
          // loading: false,
        });
      })
      .catch(() => {
        console.clear();
      });
  }

  render() {
    const { data } = this.state;

    const styleText = {
      'padding-right': '10px',
      'font-size': '2em'
    };
    return (
      <section className="iq-works position-relative pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="section-title">
                <p className="mb-0 text-uppercase iq-fw-5 iq-ls-2">Thống kê nhóm 30 ngày qua</p>
                <h2 className="title iq-fw-8">Creepypasta Việt Nam</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="services purple">
                <div className="services-info">
                  <div className="service-shap purple"><i className="icon ion-ios-people-outline" /></div>
                  <h5 className="float-left mt-4">Tổng creeper</h5>
                  <div className="clearfix" />
                  <p className="mt-3 mb-0" style={styleText}>{data.members}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services purple">
                <div className="services-info">
                  <div className="service-shap purple"><i className="icon ion-ios-book-outline" /></div>
                  <h5 className="float-left mt-4">Tổng số bài trong 30 ngày</h5>
                  <div className="clearfix" />
                  <p className="mt-3 mb-0" style={styleText}>{data.post}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services purple mb-lg-0">
                <div className="services-info">
                  <div className="service-shap purple"><i className="icon ion-plus" /></div>
                  <h5 className="float-left mt-4">Tổng số cmt trong 30 ngày</h5>
                  <div className="clearfix" />
                  <p className="mt-3 mb-0" style={styleText}>{data.cmt}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services purple mb-lg-0">
                <div className="services-info">
                  <div className="service-shap purple"><i className="icon ion-android-hand" /></div>
                  <h5 className="float-left mt-4">Reaction trong 30 ngày</h5>
                  <div className="clearfix" />
                  <p className="mt-3 mb-0" style={styleText}>{data.react}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
