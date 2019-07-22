import React from 'react';
import { connect } from 'react-redux';

import './Collection.scss';
import NotFound from '../NotFound';
import CollectionItem from '../../components/CollectionItem';
import { selectCollection } from '../../store/shop/shop.selectors';

function CollectionPage({ collection }) {
  if (!collection) {
    return <NotFound />;
  }

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
