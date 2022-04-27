import React from 'react';

export const Button = React.memo((props) => {
  console.log(`In Button ${props.children}`);
  return <button onClick={props.handleClick}> {props.children} </button>;
});
