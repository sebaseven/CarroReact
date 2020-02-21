import React from 'react';
import './directory.styles.scss';
import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            secciones: [{
                title: 'Sombreros',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'Camperas',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'Zapatos',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'Mujer',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'grande',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'Hombre',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'grande',
                id: 5,
                linkUrl: 'shop/mens'
            }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.secciones.map(({ title,imageUrl,id,size }) => (
                    <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}
export default Directory;