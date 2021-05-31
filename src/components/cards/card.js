import React from 'react';
import img1 from '../../images/Capture.PNG';
import img2 from '../../images/Capture2.PNG';
import img3 from '../../images/Capture3.PNG';
import img4 from '../../images/Capture4.PNG';
import "./card.css"
export default function card() {
  return (
    <div className="all_card">
    <div className="card">
     <div className="card1">
     <p>100Montly</p>
      <p id="money">$100</p>
      <p>
        cary the Obama <br/>
        <p>Center with you</p>
      </p>
      <img src={img1}/>
     </div>
     <div className="card1">
     <p>100Montly</p>
      <p id="money">$100</p>
      <p>
        cary the Obama <br/>
        <p>Center with you</p>
      </p>
      <img src={img2}/>
     </div>
     <div className="card1">
     <p>100Montly</p>
      <p id="money">$100</p>
      <p>
        cary the Obama <br/>
        <p>Center with you</p>
      </p>
      <img src={img3}/>
     </div>
     <div className="card1">
     <p>100Montly</p>
      <p id="money">$100</p>
      <p>
        cary the Obama <br/>
        <p>Center with you</p>
      </p>
      <img src={img4}/>
     </div>
    </div>
    <div className="dummy_texts">
      <p>
      Whether you’ve been a part of this 
      community from the start, or you’re just getting started, you belong here. With your support, we can build a Presidential Center that will revitalize the South Side of Chicago, unite a new generation of leaders 
      to move us forward, and work together
       to change history once more.
      </p>
      <p>
      Help empower emerging leaders around the world.
       Make a one-time gift today:
      </p>
     </div>
    </div>
  )
}
