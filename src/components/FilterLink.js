import React from 'react';
import { BrowserRouter as Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterLink = ({children, match: {params:{filter='all'}}}) => (
  <Link
    to={filter === "all" ? " " : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'blue'
    }}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(FilterLink);
