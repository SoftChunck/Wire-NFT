import React from "react";
import './Profit.css'
import Chart from 'react-apexcharts'
const Profit = (props) => {
    return (
        <div className="bg-color br-1 text-white px-0 py-3 row">
            <div className="col-lg-6">
                <Chart
                    options={props.opt.options}
                    series={[70]}
                    type="radialBar"
                    height={'300'}
                />       
            </div>
            <div className="col-lg-6">
                <Chart
                    options={props.opt.options}
                    series={[80]}
                    type="radialBar"
                    height={'300'}
                />                
                <p className="p-color text-center">Your total earning is 14200.25 USD out of 150000 USD (Your earned 9.4668% out of 300% of your investment )</p>
            </div>

                
        </div>
     );
}
 
export default Profit;