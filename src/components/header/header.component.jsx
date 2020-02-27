import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        COMPRAR
      </Link>
      <Link className="option" to="/contact">
        CONTACTO
      </Link>
      {currentUser ? <div className='option' onClick={()=> auth.signOut()}>SALIR</div> : <Link className="option" to="/signin">INGRESAR</Link>}
    </div>
  </div>
);
export default Header;
