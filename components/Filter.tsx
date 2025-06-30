import React from 'react';

const Filter = () => {
  const filters = ['Top Villa', 'Self Checkin', 'Pet Friendly'];

  return (
    <section>
      <h2>Filters</h2>
      <ul>
        {filters.map((filter) => (
          <li key={filter}>{filter}</li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
