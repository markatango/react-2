import { connect } from 'react-redux';
//import { Route } from 'react-router-com';
import { selectCollection, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionLoaded(state),
    collection: selectCollection
})



const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default (CollectionsPageContainer);