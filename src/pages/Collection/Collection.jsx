import React from 'react';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './Collection.styles';
import NotFound from '../NotFound';
import CollectionItem from '../../components/CollectionItem';

function CollectionPage({ collection }) {
  if (!collection) {
    return <NotFound />;
  }

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}

export default CollectionPage;
