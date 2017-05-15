import React from 'react';

export default ({ Table, Filter }) => (
  <div>
    <div style={{ paddingBottom: '10px' }}>
      <Filter />
    </div>
    <div>
      <Table />
    </div>
  </div>
);
