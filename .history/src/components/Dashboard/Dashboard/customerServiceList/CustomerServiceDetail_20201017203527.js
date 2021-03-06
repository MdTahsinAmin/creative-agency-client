import React from 'react';

const CustomerServiceDetail = ({service}) => {
  
    let bgColor ='';

    if(service.status==='true'){
        bgColor = '#009444'
    }
    else{
        bgColor = '#FF4545'
    }
 
    const statuStyle = {
        height: '40px',
        backgroundColor:bgColor,
        color: bgColor,
        borderRadius:'2px',
        border:'none'
    }
    
    const divStyle = {
          background: '#FFFFFF',
          borderRadius: '20px',
          height: '254px'
    }


    return (
        <div style={divStyle} className="col-md-4 pt-1">
            <div className="row">
              <div className="col-md-6 pl-2">
                 <img style={{height:'74px'}} className='img-fluid rounded-circle' src={`data:image/jpeg;base64,${service.image.img}`} alt=""/>
              </div>
              <div className="col-md-6">
                    <label style={statuStyle}>
                        {service.status?'Done':'Pending'}
                    </label>
              </div>
            </div>
            <h6 className="pt-2 text-center">{service.course}</h6>
            <p className='text-secondary pt-1'>{service.projectDetails}</p>
        </div>
    );
};
//img-fluid w-25 rounded-circle
export default CustomerServiceDetail;