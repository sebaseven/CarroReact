import React from 'react';
import './menu-items.styles.scss';
const MenuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>
                {title}}
                    </h1>
            <span className='subtitle'>Comprar Ahora</span>
        </div>
    </div>
)
export default MenuItem;