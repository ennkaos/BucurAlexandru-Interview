import React from 'react'
import './index.css'
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement,reset} from "./actions"
import Color from "./actions/Color.js"
function App() {
  const counter=useSelector(state=>state.counter)
  
  const dispatch=useDispatch()
  return (
    <main>
      <section className='container'>
        <h1>Counter Exercise</h1>
        <h1 id="value" className={Color()} >{counter}</h1>
        <div className="btn-container">
          <button aria-label="Increment value" onClick={()=>dispatch(increment())} className="btn">+</button>
          <button aria-label="Decrement value" onClick={()=>dispatch(decrement())} className="btn">-</button>
          <button aria-label="Reset value" onClick={()=>dispatch(reset())} className="btn">Reset</button>

        </div>     
      </section>
    </main>
  )
}

export default App
