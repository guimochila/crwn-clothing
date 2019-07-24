import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './Collection';
import WithSpinner from '../../components/WithSpinner';
import { selectIsCollectionsLoaded } from '../../store/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;
