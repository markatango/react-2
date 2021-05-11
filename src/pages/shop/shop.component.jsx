import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// route lets us show pages with filtered component content
import { Route } from 'react-router-dom';
import './shop.styles.scss';

// we have access to match object because shop page is nested in 
// a Route. Route passes history, location, match to included
// components
const  ShopPage = ({ match }) =>
( 
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionsOverview }  />
        <Route path={ `${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
)

export default ShopPage;
