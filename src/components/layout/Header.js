import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Link to="/">Home</Link> |
        <Link to="/projects"> Project Manager</Link> |
        <Link to="/contact"> Contact</Link>
        <br/>
        <br/>
    </>
  )
}

export default Header
