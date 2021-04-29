import React from 'react';
import './directory.styles.scss';
import'../../components/menu-item/menu-item.styles.scss';



class DirectoryAlternate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 4,
                  size: 'large',
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                <div  className='menu-item' >
                    <div className='background-image' >
                        <div className='content'>
                            <h1 className='menu-time title'> TITLE </h1>
                            <span className='subtitle'>SHOP NOW</span>
                            
                        </div>
                    </div>
                </div>)
               
            </div>
        )
    }
};

export default DirectoryAlternate;

