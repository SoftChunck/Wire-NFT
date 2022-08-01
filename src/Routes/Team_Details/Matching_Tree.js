import {PagePath} from "../../Components";

const Matching_Tree = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Matching Tree",page_path:"Team Details / Matching Tree"}} />                
                <div className="col-12 row justify-content-center py-5">
                    <div className="col-md-4 col-10 col-xl-5 profile-border profile-login">                                                       
                        <input type="text" className="p-2 my-2 mx-3 profile-border col-7"/>
                        <button className="btn btn-success col-2">Submit</button>
                        <button className="ms-3 btn btn-danger col-2">Go Back</button>
                    </div>
                    <div className="col-8 row justify-content-center mt-5">
                        <div className="tree col-12 row d-flex flex-column align-items-center">                           
                                <img src="assets/images/user3red.png" className="col-1"/>
                                <img src="assets/images/treeimg.png" className="col-12"/> 
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Matching_Tree;