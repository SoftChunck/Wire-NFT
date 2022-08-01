import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const My_Referral = () => {
    var [my_referral,set_my_referral]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'User ID',accessor:'user_id'},
                {Header:'Packgae',accessor:'package'},
                {Header:'Date',accessor:'date'},
                {Header:'Remark',accessor:'remark'}, 
                {Header:'Activation Date Time',accessor:'activation_date'}, 
                {Header:'Total Active Team',accessor:'total_active_team'}, 
            ],
        rows:[
                {sr:'1',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'2',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'3',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'4',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'5',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'6',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'7',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'8',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
                {sr:'9',user_id:'625029',package:'7',date:'100 USD',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',total_active_team:'0'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"My Referral",page_path:"Team Details / My Referral"}} />
                <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
                </div>
                <Table
                    data={my_referral.rows}
                    columns={my_referral.cols}
                />
                
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default My_Referral;