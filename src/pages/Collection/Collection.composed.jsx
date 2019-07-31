import React from 'react';
import { Query } from 'react-apollo';

import CollectionPage from './Collection';
import Spinner from '../../components/Spinner';
import { GET_COLLECTIONS_BY_TITLE } from '../../graphql/queries';

const CollectionPageComposed = ({ match }) => (
  <Query
    query={GET_COLLECTIONS_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data: { getCollectionsByTitle } }) => {
      if (loading) return <Spinner />;

      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageComposed;
