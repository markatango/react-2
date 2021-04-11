import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';


const HomePage  = () => ( 
    <div className='homepage'>
        <Directory className='directory-menu'></Directory>
    </div>
);

export default HomePage;