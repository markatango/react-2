import React from 'react';
import { connect } from 'react-redux';
//import { Route } from 'react-router-com';
import { selectShopItemCategory } from '../../redux/shop/shop.selectors';
import { CollectionItem } from '../../components/collection-item/collection-item.component'

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
)}


// own props gets props from CollectionPage, including match 
// since CollectionPage is wraped in a Route comonent on Shop page
const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItemCategory(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

