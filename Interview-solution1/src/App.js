import React, { useState} from 'react'
import './index.css'
import {Increment,Decrement,Reset} from "./Actions.js"
function App() {
  const [value,setValue]=useState(0)
  let color;
  const handleIncrement=()=>{
    setValue(value+1)
    
  }
  const handleDecrement=()=>{
    setValue(value-1)
    
  }
  const handleReset=()=>{
    setValue(0)
  }

  
  if(value<0){
    alert("You can not decrement below 0  ")
    setValue(0)
    color="black";
   }else if(value%2===0 && value!==0){
    color="red";
   }else if(value%2!==0){
    color="green";
   }

  return (
    <main>
      <section className='container'>
        <h1>Counter Exercise</h1>
        {console.log(color)}
        <h1 id="value" className={color} >{value}</h1>
        <div className="btn-container">
          <Increment handle={handleIncrement}/>
          <Decrement handle={handleDecrement}/>
          <Reset handle={handleReset}/>
        </div>
        
       
       
      </section>
    </main>
  )
}

export default App
