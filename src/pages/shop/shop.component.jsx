import React, {useEffect } from 'react';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPageContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsOverviewContainer from '../collection/collection.container';

// route lets us show pages with filtered component content
import { Route } from 'react-router-dom';
import './shop.styles.scss';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

// wrap the CollectionsOverview in a HOC
//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class version
const  ShopPage = ({ fetchCollectionsStart, match }) => {
 useEffect(()=>{
    fetchCollectionsStart()
 }, [fetchCollectionsStart])

    return ( 
        <div className='shop-page'>
            { /*<Route exact path={`${match.path}`} component={ CollectionsOverview }  />
            <Route path={ `${match.path}/:collectionId`} component={ CollectionPage } /> */ }

            {/* <Route 
                exact path={`${match.path}`} 
                render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching } {...props} />} />
            <Route 
                path={ `${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />  */}

            <Route 
                exact path={`${match.path}`} 
                component={CollectionsPageContainer} />
            <Route 
                path={ `${match.path}/:collectionId`} 
                component={CollectionsOverviewContainer} />

        </div>
    )

};

/* const mapStateToProps = createStructuredSelector({
    isCollectionLoaded : selectIsCollectionLoaded,
    isCollectionFetching : selectIsCollectionFetching
}) */

//fetchCollectionsStartAsync() returns a function that takes dispatch as an argument
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
}); 

export default connect(null, mapDispatchToProps)(ShopPage);
