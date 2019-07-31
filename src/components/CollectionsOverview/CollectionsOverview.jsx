import React from 'react';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import CollectionPreview from '../../components/CollectionPreview';

function CollectionsOverview({ collections }) {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}

export default CollectionsOverview;
