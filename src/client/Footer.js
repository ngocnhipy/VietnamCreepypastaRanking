import React, { Component } from 'react';
import footer1 from './images/cpvn_footer.png';


export default class Footer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <footer className="footer-one footer-bg  position-relative">
        <img src={footer1} className="img-fluid fshap-after" alt="" />
        <div className="contactinfo">
          <div className="container p-0">
            <div className="row ">
              <div className="col-lg-12 col-md-6">
                <div className="footer-copyright mb-4 iq-fw-5 mt-3">
                  © Copyrights
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  Creepypasta Việt Nam -
                  {' '}
                  <a href="https://fb.com/100004204021019" target="_blank" rel="noopener noreferrer">ngocnhipy</a>
                  {' '}
                  -
                  {' '}
                  <a href="https://fb.com/groups/creepypasta.vn/" target="_blank" rel="noopener noreferrer">Nhóm</a>
                  {' '}
                  -
                  {' '}
                  <a href="https://vlink.maxddns.com/dEkK49bM" target="_blank" rel="noopener noreferrer">Thử thách</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="back-to-top">
          <a className="top" href="#top">
            <i className="ion-ios-arrow-thin-up" />
          </a>
        </div>
      </footer>
    );
  }
}
