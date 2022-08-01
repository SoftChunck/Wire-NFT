import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Direct_Leg_Business = () => {
    var [direct_leg_business,set_direct_leg_business]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'User ID',accessor:'user_id'},
                {Header:'Investment',accessor:'investment'},
                {Header:'Team Business',accessor:'team_business'},
            ],
        rows:[
                {sr:'1',user_id:'549414',investment:'25500.00',team_business:'1233'},
                {sr:'2',user_id:'549414',investment:'25500.00',team_business:'1233'},
                {sr:'3',user_id:'549414',investment:'25500.00',team_business:'1233'},
                {sr:'4',user_id:'549414',investment:'25500.00',team_business:'1233'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Direct Leg Business",page_path:"Team Details / Direct Leg Business"}} />                
                <Table
                    data={direct_leg_business.rows}
                    columns={direct_leg_business.cols}
                />
            </div>
        </div>
     );
}
 
export default Direct_Leg_Business;