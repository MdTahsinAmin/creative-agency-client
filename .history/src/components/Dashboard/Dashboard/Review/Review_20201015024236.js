import React, { useContext } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './Review.css'
import { useForm } from "react-hook-form";
import { AgencyUser } from '../../../../App';
const Review = () => {

   
    const [loginUser , setLoginUser] = useContext(AgencyUser)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <section className="container-fluid row">

        <div className="col-md-4" style={{height:'100vh'}}>
        <ExtraAppBar side={true}></ExtraAppBar>
          <SideBar></SideBar>
        </div>

        <div className="col-md-8 p-4 pr-5">

          <h5 className="text-brand mt-2">Review</h5>
          { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}

          <div className='order-place pl-5'>
            
          <div className='mt-5 pt-5'>

             <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        
                <div className="input-groups">
                     <input type="text" name='name' className='form-control' ref={register} placeholder='Your name'/>
                 </div>
                        
                <div className="input-groups">
                   <input type="text" name='companyName' className='form-control' ref={register} placeholder='Company’s name, Designation'/>
                </div>
                    
               <div className="input-groups">
                 <textarea name="description" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Description"></textarea>
              </div>
                
              <input type="submit" value='Send' className='hireUs-btn mt-3'/>

            </form>

            </div>
            </div>
        </div>

    </section>
    );
};

export default Review;