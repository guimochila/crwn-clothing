import React from 'react';
import { Query } from 'react-apollo';

import Header from './Header';
import { GET_CART_HIDDEN } from '../../graphql/queries';

const HeaderComposed = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
  </Query>
);

export default HeaderComposed;
