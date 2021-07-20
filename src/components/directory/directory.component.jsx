import React from 'react';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectoryItems } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


const  Directory = ({ sections }) =>  (
        <div className='directory-menu'>
            {
                /* this.state.sections.map( ({ title, imageUrl, id, size, history}) => (
                    <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}></MenuItem>
                    ) */
                sections.map( ({ id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}></MenuItem>
                  )
                  
                )
            }
        </div>
    )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);