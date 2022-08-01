import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const My_Team = () => {
    var [my_team,set_my_team]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'ID',accessor:'id'},
                {Header:'Wallet',accessor:'wallet'},
                {Header:'Date and Time',accessor:'date_time'},
                {Header:'Remark',accessor:'remark'}, 
                {Header:'Activation Date Time',accessor:'activation_date'}, 
                {Header:'Staking',accessor:'staking'}, 
            ],
        rows:[
                {sr:'1',id:'625029',Wallet:'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt',date_time:'6/20/2022 9:36:01 AM',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',staking:'200.00'},
                {sr:'2',id:'625029',Wallet:'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt',date_time:'6/20/2022 9:36:01 AM',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',staking:'200.00'},
                {sr:'3',id:'625029',Wallet:'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt',date_time:'6/20/2022 9:36:01 AM',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',staking:'200.00'},
                {sr:'4',id:'625029',Wallet:'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt',date_time:'6/20/2022 9:36:01 AM',remark:'Active',activation_date:'12/11/2021 1:40:08 PM',staking:'200.00'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"My Team",page_path:"Team Details / My Team"}} />
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
                    data={my_team.rows}
                    columns={my_team.cols}
                />
                
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default My_Team;