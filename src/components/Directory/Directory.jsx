import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from '../MenuItem';
import { selectDirectorySections } from '../../store/directory/directory.selectors';

function Directory({ sections }) {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
