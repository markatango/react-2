import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// route lets us show pages with filtered component content
import { Route } from 'react-router-dom';
import './shop.styles.scss';

import { getShopData } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


// we have access to match object because shop page is nested in 
// a Route. Route passes history, location, match to included
// components
/* const  ShopPage = ({ match }) =>
( 
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionsOverview }  />
        <Route path={ `${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
) */

// wrap the CollectionsOverview in a HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// sclass version
class  ShopPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    // or without constructor  per later versions of React
    // state = {
    //     loading: true
    // }
        
    // =====================================================
    // Morphing from synchronous to asynchronous access via thunk
    // =====================================================

    unsubscribeFromSnapshot = null;

    //attach a 'next' function to the listener (onSnapshot...) that subscribes to the observable sequence of auth events
    // assign the function returned to unsubscribe... so the listenter can unsubxribe when the component unmounts

    // this code uses proprietary firebase functions
    //----------------------------------------------

    /* componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    } */

    // this code uses promises
    //----------------------------------------------

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        // get() returns a promise
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    }

    //  test the native fetch() command
    //----------------------------------------------

    /* componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        fetch('https://firestore.googleapis.com/v1/projects/node-react-dev-308922/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections));
    } */
            /*    This is what you get *Gak!*
                {documents: Array(5)}
            documents: Array(5)
            0:
            createTime: "2021-07-15T22:38:18.049826Z"
            fields:
            id:
            integerValue: "2"
            __proto__: Object
            items:
            arrayValue:
            values: Array(8)
            0:
            mapValue:
            fields:
            id: {integerValue: "10"}
            imageUrl: {stringValue: "https://i.ibb.co/0s3pdnc/adidas-nmd.png"}
            name: {stringValue: "Adidas NMD"}
            price: {integerValue: "220"}
            __proto__: Object
            __proto__: Object
            __proto__: Object
            1: {mapValue: {…}}
            2: {mapValue: {…}}
            3: {mapValue: {…}}
            4: {mapValue: {…}}
            5: {mapValue: {…}}
            6: {mapValue: {…}}
            7: {mapValue: {…}}
            length: 8
            __proto__: Array(0)
            __proto__: Object
            __proto__: Object */
    
    render(){
        const { match } = this.props;
        console.log(match);
        const { loading } = this.state;
        return ( 
            <div className='shop-page'>
                { /*<Route exact path={`${match.path}`} component={ CollectionsOverview }  />
                <Route path={ `${match.path}/:collectionId`} component={ CollectionPage } /> */ }

                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={ `${match.path}/:collectionId`} 
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} /> 
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections : (collectionsMap) => dispatch(getShopData(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
