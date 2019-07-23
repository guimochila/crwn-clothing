import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './Collection.styles';
import NotFound from '../NotFound';
import CollectionItem from '../../components/CollectionItem';
import { selectCollection } from '../../store/shop/shop.selectors';

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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
