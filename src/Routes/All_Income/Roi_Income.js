import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Roi_Income = () => {
    var [roi_income,set_roi_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'ID',accessor:'id'},
                {Header:'Token',accessor:'token'},
                {Header:'Income(USD)',accessor:'income_usd'}, 
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',id:'101495',token:'338.846169456626',income_usd:'12345 $',date:'20/07/2022'},
                {sr:'2',id:'101495',token:'338.846169456626',income_usd:'12345 $',date:'20/07/2022'},
                {sr:'3',id:'101495',token:'338.846169456626',income_usd:'12345 $',date:'20/07/2022'},
                {sr:'4',id:'101495',token:'338.846169456626',income_usd:'12345 $',date:'20/07/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"ROI Income",page_path:"All Income / ROI Income"}} />
                <Table
                    data={roi_income.rows}
                    columns={roi_income.cols}
                />
            </div>
        </div>
     );
}
 
export default Roi_Income;