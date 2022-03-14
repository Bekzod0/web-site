import React from "react";
const Card = ({city}) => {
  return (
    <div className="card">
         <div className="Maininfo">
             <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
              <div className="title">{city}</div>  
              <div>Cloude</div> 
              <div className="temperature">20°</div>       
         </div>
         <div className="Information">
           <div>Humid: 15</div>
           <div>like:  19</div>
         </div>
   </div>
)};

export default Card;
