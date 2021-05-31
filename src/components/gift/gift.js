import React from 'react';
import "./gift.css"

export default function gift() {
    return (
        <div className="">
            <h3 className="h2">MAKE ONE-TIME GIFT TODAY</h3>
            <div className="buttons">
              <div className="layer1">
              <button className="btn">$10</button>
              <button className="btn">$25</button>
              <button className="btn">$50</button>
              </div>
              <div className="layer2">
              <button className="btn">$100</button>
              <button className="btn">$250</button>
              <button className="btn">$500</button>
              </div>
            </div>
        </div>
    )
}
