import React from 'react';

export const Title = React.memo(() => {
  console.log('In Title');
  return <div> IN Counter app</div>;
});
