import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>


        <div className='preview'>
            {items.filter((item, idx) => idx < 4).map((item) =>(
                <div key={item.id}>
                    <div className='background-image' 
                        style={{backgroundImage: `url(${item.imageUrl})`}} />
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
);

export default CollectionPreview;