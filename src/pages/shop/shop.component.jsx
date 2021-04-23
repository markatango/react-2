import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }
// destructuring this.state
// use of ... to destructure all the other properties
    render() {
       const { collections } = this.state;
       return ( 
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default ShopPage;
