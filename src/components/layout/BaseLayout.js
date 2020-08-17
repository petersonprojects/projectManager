import React from 'react';
import Header from './Header';

const BaseLayout = (props) => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        {props.children}
      </div>
    </>
  )
}

export default BaseLayout
