import { useState } from "react";
import {PagePath,Table} from "../../Components";

const Activate_History = () => {
    var [activate_history,set_activate_history]= new useState({
        cols:[
                {Header:'#',accessor:'sr'},
                {Header:'Package Amount',accessor:'package_amount'},
                {Header:'Remark',accessor:'remark'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',package_amount:'100 USD',reamrk:'Activate',txn:'View txn',date:'20-05-2022'},
                {sr:'2',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
                {sr:'3',package_amount:'100 USD',reamrk:'Upgrade',txn:'View txn',date:'20-05-2022'},
        ]});
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Activate  History",page_path:"Activation / Activate History"}} />
                <Table
                    data={activate_history.rows}
                    columns={activate_history.cols}
                />
            </div>
        </div>
     );
}
 
export default Activate_History;