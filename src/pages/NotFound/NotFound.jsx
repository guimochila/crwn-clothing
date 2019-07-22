import React from 'react';
import { NotFoundContainer } from './NotFound.styles';

function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Ooops! 404 </h1>
      <span>The page you are looking for does not exists.</span>
    </NotFoundContainer>
  );
}

export default NotFound;
