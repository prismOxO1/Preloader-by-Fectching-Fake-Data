import React, { useEffect } from 'react'
import { preLoaderAnim  } from '../animation';
import './preloader.css'

const Preloader = () => {


    useEffect (()=>{
        preLoaderAnim()
    }, []);

  return (
    <div>
      <div className="preloader">
        <div className="texts-container">
            <span>orth</span>
            <span className="Color">blox</span>

        </div>
      </div>
    </div>
  )
}

export default Preloader
