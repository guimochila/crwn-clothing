import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleLink,
  PreviewContainer,
} from './CollectionPreview.styles';
import CollectionItem from '../CollectionItem';

export function CollectionPreview({ title, items, match }) {
  return (
    <CollectionPreviewContainer>
      <TitleLink to={`${match.url}/${title.toLowerCase()}`}>
        <h1>{title.toUpperCase()}</h1>
      </TitleLink>
      <PreviewContainer>
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);
