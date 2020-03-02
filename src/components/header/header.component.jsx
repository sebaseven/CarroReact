import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser ,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        COMPRAR
      </Link>
      <Link className='option' to='/shop'>
        CONTACTO
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SALIR
        </div>
      ) : (
        <Link className='option' to='/signin'>
          INGRESAR
        </Link>
      )}
      <CartIcon></CartIcon>
    </div>
    { hidden ? null :  <CartDropdown/>}
   
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);