import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
// withRouter provides history.push property to <route> elements on main app.

const MenuItem = ({ title, imageUrl, match, size, history, linkUrl }) => {
    //console.log(`${match.url} ${linkUrl}`)
    // console.log(history)
    // console.log(match)
    // console.log(linkUrl)
    console.log(imageUrl);

    return  (
    <div 
        className={`${size}  menu-item`} 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{backgroundImage: `url(${imageUrl})`}}>
            <div className='content'>
                <h1 className='title'> {title.toUpperCase()} </h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    </div>)
};

export default withRouter(MenuItem);