import React from 'react';
import Nav from '../navigation/nav';
import image from "../obama.PNG";
import "./home.css";
import Card from '../../components/cards/card';
import GiftButtons from '../../components/gift/gift';
import Pay from '../payPage/PayPageComponent'
export default function home() {
    return (
        <div className="home">
            <Nav/>
            <div className="imgText">
             <div className="imag">
                <img  className="image" src={image}/>
             </div>
            <div className="text-button">
            <div className="texts">
                 <h2>
                     Empower Leads
                 </h2>
                 <h2>
                     and
                 </h2>
                 <h2>
                     Change Makers 
                 </h2>
             </div>
             <div className="buttons">
               <button id="btn1">Become a Montlty contributor</button>
               <button id="btn2">Make a one time contribution</button>
             </div>
            </div>
             </div>
             <div className="text">
               <h1>Let's build this Foundation together.</h1>
               <p className="lowerText">
               Become a monthly contributor and keep an eye on your mailbox
                 for a token of appreciation sent straight from the Obama
                Foundation’s Chicago HQ. Choose your contribution.  
               </p>
             </div>
             <div className="cards">
             <Card/>
             <GiftButtons/>
             <Pay/>
             </div>
        </div>
    )
}


