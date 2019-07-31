import React from 'react';
import { Query } from 'react-apollo';

import CollectionOverview from './CollectionsOverview';
import Spinner from '../Spinner';
import { GET_COLLECTIONS } from '../../graphql/queries';

const CollectionOverViewComposed = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data: { collections } }) => {
      if (loading) return <Spinner />;

      return <CollectionOverview collections={collections} />;
    }}
  </Query>
);

export default CollectionOverViewComposed;
