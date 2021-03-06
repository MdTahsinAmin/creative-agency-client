import React from 'react';

const CustomerServiceDetail = ({service}) => {
  
    let bgColor ='';

    if(service.status){
        bgColor = '#009444'
    }
    else{
        bgColor = '#FF4545'
    }
 
    const statusStyle = {
        height: '40px',
        backgroundColor:bgColor,
        color: bgColor
    }
     
    return (
        <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                 <img src="" alt=""/>
              </div>
              <div className="col-md-6">
                    <div >
                        {service.status?'Done':'Pending'}
                    </div>
              </div>
               <p className='text-secondary'></p>
            </div>
        </div>
    );
};

export default CustomerServiceDetail;