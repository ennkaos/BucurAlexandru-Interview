import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const Increment=({handle})=>{
    return <div>
            <button className="btn" type="button" onClick={handle}><AddIcon/></button>
          </div>
     
  }
export  const Decrement=({handle})=>{
    return <button type="button"  className="btn"  onClick={handle}><RemoveIcon/></button>
  }
export  const Reset=({handle})=>{
    return <button type="button" className="btn"   onClick={handle}>Reset</button>
  }