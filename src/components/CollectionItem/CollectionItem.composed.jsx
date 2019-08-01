import React from 'react';
import { Mutation } from 'react-apollo';

import CollectionItem from './CollectionItem';
import { ADD_ITEM_TO_CART } from '../../graphql/queries';

const CollectionItemComposed = props => (
  <Mutation mutation={ADD_ITEM_TO_CART} variables={{ item: props.item }}>
    {addItemToCart => (
      <CollectionItem {...props} addItem={item => addItemToCart(item)} />
    )}
  </Mutation>
);

export default CollectionItemComposed;
