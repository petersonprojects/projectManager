import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Link to="/">Home</Link> |
        <Link to="/projects"> Project Manager</Link>
        <br/>
    </>
  )
}

export default Header
