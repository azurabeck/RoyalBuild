import React from 'react';
import Navbar from './component-ui/global/navbar'
import BG from './component-ui/images/carrossel.png'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <img className='bg-img' src={BG} alt=''/>
        <ul className='cat-btn'>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
            <li>O</li>
        </ul>
    </div>
  );
}

export default App;
