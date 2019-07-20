import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionsOverview.scss';
import CollectionPreview from '../../components/CollectionPreview';
import { selectCollectionsForPreview } from '../../store/shop/shop.selectors';

function CollectionsOverview({ collections }) {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
