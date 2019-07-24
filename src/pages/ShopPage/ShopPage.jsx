import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { CollectionsOverviewContainer } from '../../components/CollectionsOverview';
import { CollectionPageContainer } from '../Collection';
import { fetchCollectionStartAsync } from '../../store/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
