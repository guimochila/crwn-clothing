import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner';
import { fetchCollectionStart } from '../../store/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview'),
);
const CollectionPageContainer = lazy(() => import('../Collection'));

function ShopPage({ fetchCollectionStart, match }) {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
