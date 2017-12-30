import React from 'react';

const Common=({spec,children})=>{
  return (
    <div {...spec}>
      {children}
    </div>
  )
}

export default Common;
