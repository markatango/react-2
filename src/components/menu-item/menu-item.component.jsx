import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';


// withRouter provides accesss to the route params inserted into the first matching <Route> element
// esp. history.push property to <route> elements on main app.

const MenuItem = ({ title, imageUrl, match, size, history, linkUrl }) => {
    //console.log(`${match.url} ${linkUrl}`)
      console.log(history)
      console.log(match);
    // console.log(linkUrl)
    //console.log(imageUrl);

    return  (
    <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image'
             style={{backgroundImage: `url(${imageUrl})`}}  />        
        <div className='content'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
     
    )
};

// withRouter is a HCP: It takes a component as an argument and returns a modified component.
// in this case give mnenutiem access to routes  props in Route.


export default withRouter(MenuItem);