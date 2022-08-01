import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Matching_Income = () => {
    var [matching_income,set_matching_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'Matching Business',accessor:'matching_business'},
                {Header:'Capping Amount',accessor:'capping_amount'},
                {Header:'Net Income',accessor:'net_income'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',matching_business:'300 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
                {sr:'2',matching_business:'200 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
                {sr:'3',matching_business:'200 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
                {sr:'4',matching_business:'100 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
                {sr:'5',matching_business:'100 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
                {sr:'6',matching_business:'100 Wire',capping_amount:'24.0000000000086 Wire',net_income:'0.0000 Wire',date:'5/24/2022 3:22:19 PM'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Matching Income",page_path:"All Income / Matching Income"}} />
                <Table
                    data={matching_income.rows}
                    columns={matching_income.cols}
                />
            </div>
        </div>
     );
}
 
export default Matching_Income;