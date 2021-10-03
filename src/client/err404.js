import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import err1 from './images/errpage1.png';
import err2 from './images/errpage2.png';
import err3 from './images/errpage3.png';


export default class err404 extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="iq-pagenotfound position-relative text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="pagenotfound-info ">
                <img src={err1} className="img-fluid mb-5 " alt="" />
                <h2 className="mb-3 iq-fw-8">Uh No! This Page Is Not Found</h2>
                <Link className="slide-button button" to="/">
                  <div className="first">Back to Home</div>
                  <div className="second">Back to Home</div>
                </Link>
              </div>
              <img src={err2} className="img-fluid pagenotfound-left" alt="" />
              <img src={err3} className="img-fluid pagenotfound-right" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
