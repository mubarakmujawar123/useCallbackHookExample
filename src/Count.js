import React from 'react';

export const Count = React.memo(({ count }) => {
  console.log('In count', count);
  return <div> Count - {count}</div>;
});
