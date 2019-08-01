import React from 'react';

import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from '../MenuItem';
import DATA_DIRECTORY from './Directory.data';

function Directory() {
  return (
    <DirectoryMenuContainer>
      {DATA_DIRECTORY.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenuContainer>
  );
}

export default Directory;
