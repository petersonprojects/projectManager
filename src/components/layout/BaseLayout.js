import React from 'react';

const BaseLayout = (props) => {
  return (
    <>
      <div className="container-fluid">
        {props.children}
      </div>
    </>
  )
}

export default BaseLayout
