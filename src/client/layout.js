import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Iq from './iq';


class layout extends Component {
   state = {
     // loading: true,
   };

   componentDidMount() {
     // this.setState({ loading: false });
   }

   render() {
     // const { loading } = this.state;
     const { children } = this.props;

     return (
       <div>
         <Header />
         {children}
         <Iq />
         <Footer />
       </div>
     );
   }
}

layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default layout;
