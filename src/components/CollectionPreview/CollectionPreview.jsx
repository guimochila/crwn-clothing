import React from 'react';

import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from './CollectionPreview.styles';
import CollectionItem from '../CollectionItem';

function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
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

export default CollectionPreview;
