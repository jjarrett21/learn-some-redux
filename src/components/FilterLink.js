import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterLink = ({props}) => (
  <Link
    to={props.match.params.filter === "all" ? " " : filter}
    style={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {this.props.children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
