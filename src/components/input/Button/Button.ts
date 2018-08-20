import React from 'react';

const Button = ({ onClick: handleClick, children }) = (
  <button onClick={handleClick}>{children}</button>
);
