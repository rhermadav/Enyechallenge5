import React from 'react';

const Pagination = ({  profileperPage, totalProfiles , paginate }) => {
  const pageMumbers = [];

  for (let i=1; i <= Math.ceil(totalProfiles/profileperPage); i++) {
       pageMumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination center'>
        {pageMumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

}

export default Pagination;