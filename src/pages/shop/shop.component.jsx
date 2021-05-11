import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import './shop.styles.scss';

const  ShopPage = ({collections}) =>
( 
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
  })
  
export default connect(mapStateToProps, null)(ShopPage);
