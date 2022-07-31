import React from "react";
import './Earned_USD.css'
const Earned_USD = (props) => {
    return ( 
        <div className="Earned_USD bg-color p-0  br-1">
            <div className=" p-3 row">
                <p className="p-color">Participates have earned USD</p>
                <h1 className="h-color h3">{props.data.earned_usd}USD</h1>
            </div>
            <div className="progress-row bg-transparent br-1">
                <div className="progress-bar-row bg-white  br-1" style={{width:((props.data.earned_usd/props.data.total_usd)*100)+'%'}}></div>
            </div>
        </div>
     );
}
 
export default Earned_USD;