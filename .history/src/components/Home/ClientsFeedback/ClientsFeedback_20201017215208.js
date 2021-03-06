import React, { useEffect, useState } from 'react';

const ClientsFeedback = () => {
    
   
    const [feedBacks,setFeedBacks] = useState([]);

    useEffect(()=>{
        
        async function loadData() {
             const request = await fetch('http://localhost:5200/allReviews')

             return request;
        }

        loadData().then(res => res.json())
        .then(data =>setFeedBacks(data))

    },[])

    
    return (
        <section className="services-container mt-5 pt-5 mb-5 pb-5">
        <div className="text-center">
            <h2 className='service-title'>Clients <span style={{color:' #7AB259'}}>Feedback</span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 card-deck mt-5 pt-5 mb-5 pb-5">
            {
                feedBacks.map(feedBack =><AllFeedbacks feedBack={feedBack} key={feedBack.id}></AllFeedbacks>)
            }
        </div>
    </div>
    </section>
    );
};

export default ClientsFeedback;