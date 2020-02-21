import React from 'react';
import './homepage.styles.scss';
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        SOMBREROS
                    </h1>
                    <span className='subtitle'>Comprar Ahora</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        CAMPERAS
                    </h1>
                    <span className='subtitle'>Comprar Ahora</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        ZAPATOS
                    </h1>
                    <span className='subtitle'>Comprar Ahora</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        MUJERES
                    </h1>
                    <span className='subtitle'>Comprar Ahora</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        HOMBRES
                    </h1>
                    <span className='subtitle'>Comprar Ahora</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;