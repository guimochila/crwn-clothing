import React from 'react';
import shopdata from './shopdata';
import CollectionPreview from '../../components/CollectionPreview';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: shopdata,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
