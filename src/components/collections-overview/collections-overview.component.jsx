import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overiew'>
        {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: SelectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);