import React from 'react';
import { Query } from 'react-apollo';

import Header from './Header';
import { GET_CLIENT_PROPERTIES } from '../../graphql/queries';

const HeaderComposed = () => (
  <Query query={GET_CLIENT_PROPERTIES}>
    {({ data: { cartHidden, currentUser } }) => (
      <Header hidden={cartHidden} currentUser={currentUser} />
    )}
  </Query>
);

export default HeaderComposed;
