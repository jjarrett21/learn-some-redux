// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import FilterLink from './FilterLink';


const Footer = () => (
    <p>
      Show:
            {' '}
      <FilterLink filter="all"
  
      >
        All
              </FilterLink>
      {', '}
      <FilterLink filter="active"
  
      >
        Active
              </FilterLink>
      {', '}
      <FilterLink filter="completed"
  
      >
        Completed:
              </FilterLink>
    </p>
  );

  export default Footer;