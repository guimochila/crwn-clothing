import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../store/shop/shop.selectors';
import WithSpinner from '../WithSpinner';
import CollectionOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

export default CollectionsOverViewContainer;
