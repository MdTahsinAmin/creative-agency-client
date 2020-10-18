import React from 'react';
import './AllFeedback.css';
const AllFeedbacks = ({feedBack}) => {
    return (
       <div className="col-md-4 feedback mb-4">
           <div className="row">
               <div className="col-md-6 mb-3">
                   <img className="mx-4 mt-3 img-fluid rounded-circle" src={feedBack.photoUrl} alt="" width="50"/>
               </div>
               <div>
               <h6 className="text-primary mt-1">{feedBack.name}</h6>
                    <p style={{color:'black'}}  className="m-0">{feedBack.companyName}</p>
               </div>
           </div>
           <p className="card-text text-secondary mx-3">{feedBack.description}</p>
       </div>
    );
};

export default AllFeedbacks;


