import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Withdrawal_History = () => {
    var [withdrawal_history,set_withdrawal_history]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'Withdrawal Token',accessor:'withdrawal_token'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Paid Date',accessor:'paid_date'}],
        rows:[
                {sr:'1',withdrawal_token:'500',txn:'View Txn',paid_date:'18/06/2022'},
                {sr:'1',withdrawal_token:'500',txn:'View Txn',paid_date:'18/06/2022'},
                {sr:'1',withdrawal_token:'500',txn:'View Txn',paid_date:'18/06/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Withdrawal History",page_path:"History / Withdrawal History"}} />
                <Table
                    data={withdrawal_history.rows}
                    columns={withdrawal_history.cols}
                />
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default Withdrawal_History;