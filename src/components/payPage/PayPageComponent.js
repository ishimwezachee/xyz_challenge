import React from 'react';
import {Link} from 'react-router-dom';
import imag from '../../images/pic1.PNG';
import "./pay.css"
export default function home() {
    return (
        <div>
        <div className="nav">
            <div>
            <p className="top-words"><strong>OBAMA</strong>Donate</p>
            </div>
            <div>
            <Link to="/pay">
          <button className="blue">Go back</button>
          </Link>
          <button className="top">Donate Now</button>
            </div>
        </div>
        <div>
         <img src={imag}/>
         </div>
            </div>
    )
}


