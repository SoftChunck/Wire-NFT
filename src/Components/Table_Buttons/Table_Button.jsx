import { useState } from 'react';
import './Table_Button.css'
const Table_Buttons = (props) => {
    let last_value = Number(props.data.last_value);
    let first_value = Number(props.data.first_value);
    let [value,setvalue] = new useState(Number(props.data.current_value));
    return ( 
        <div className="Table_Buttons d-flex flex-row align-items-center">
            <button className="tablebtn bg-white px-5 py-2" 
            onClick={()=>{
                setvalue('1');
            }}>First</button>
            <button className="tablebtn bg-white px-5 py-2"
            onClick={()=>{
                setvalue(()=>{
                    if(value > first_value)
                    {
                        value = value - 1;
                        return value;
                    }
                    return first_value;
                });
            }}>Prev</button>
            <p className='px-4 py-2 h-color m-0 fs-5 bg-pp'>{value}</p>
            <button className="tablebtn bg-white px-5 py-2"
            onClick={()=>{
                setvalue(()=>{
                   if(value < last_value)
                   {
                    value = value + 1;
                    return value;
                   }
                   return last_value;
                });
            }}>Next</button>
            <button className="tablebtn bg-white px-5 py-2"
            onClick={()=>{
                setvalue(last_value);
            }}>Last</button>
        </div>
     );
}
 
export default Table_Buttons;