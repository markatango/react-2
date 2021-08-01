import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from './collections-overview.component';

import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

//const CollectionsContainer = connect(mapStateToProps)(CollectionsOverview);

// wiht comppose
const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsContainer ;