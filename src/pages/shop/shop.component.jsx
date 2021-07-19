import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchShopData } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

// route lets us show pages with filtered component content
import { Route } from 'react-router-dom';
import './shop.styles.scss';

// we have access to match object because shop page is nested in 
// a Route. Route passes history, location, match to included
// components

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/* const  ShopPage = ({ match }) =>
( 
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionsOverview }  />
        <Route path={ `${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
) */

class  ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
           // console.log(snapShot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            console.log(`Received from firestore: ${collectionsMap}`);
            console.log(collectionsMap);
            await updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    }

    // loading = this.state;
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={ `${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} /> 
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections : (collectionsMap) => dispatch(fetchShopData(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
