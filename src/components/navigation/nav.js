import React from 'react';
import {Link} from 'react-router-dom';
import "./nav.css"
export default function home() {
    return (
        <div className="nav">
            <div>
            <p className="top-words"><strong>OBAMA</strong>Donate</p>
            </div>
            <div>
          <Link to="/pay">
          <button className="top">Donate Now</button>
          </Link>

            </div>
        </div>
    )
}


