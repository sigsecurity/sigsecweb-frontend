import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './layout/Header';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="ACM SIG-Security"
    />
    <Header />
    <div>
      {/* {children()} */}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
