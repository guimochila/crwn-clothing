import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';
import CollectionPreview from '../../components/CollectionPreview';
import { selectCollectionsForPreview } from '../../store/shop/shop.selectors';

function CollectionsOverview({ collections }) {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
