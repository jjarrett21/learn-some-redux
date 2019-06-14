import React from 'react';
import { Link } from 'react-router-dom';
import{withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

// const FilterLink = ({match: {params:{filter='all'}},children}) => (
    const FilterLink = ({filter, children}) => (
  <Link
    to={filter === "all" ? " " : filter}
    style={{
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
