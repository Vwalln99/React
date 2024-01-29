import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <h1>My React App</h1>
        <ul className="nav-menu"> {/*class*/}
      <li>Home</li>  {/*li ohne closing tag*/}
      <li>Contact</li>
      <li>About Us</li>
        </ul>
        <svg>
          <circle cx={25} cy={75} r={20} stroke='red' strokeWidth={3}/> {/*cx,cy="", stroke-width */}
        </svg>
        <form><input type="text"/></form>
        </div>
        </>
  )
}

export default App