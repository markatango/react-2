import React from 'react';
import './directory.styles.scss';

import MenuItem from '../../components/menu-item.component';


class Directory extends React.Component {
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
                {
                    /* this.state.sections.map( ({ title, imageUrl, id, size, history}) => (
                        <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}></MenuItem>
                        ) */
                    this.state.sections.map( ({ id, ...otherSectionProps}) => (
                      <MenuItem key={id} {...otherSectionProps}></MenuItem>
                      )
                    )
                }
            </div>
        )
    }
};

export default Directory;