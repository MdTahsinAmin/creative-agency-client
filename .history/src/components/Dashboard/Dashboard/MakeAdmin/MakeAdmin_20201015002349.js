import React from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-4" style={{height:'100vh'}}>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-4 pr-5">
              <h5 className="text-brand mt-2">Service List</h5>
              
            </div>
        </section>
    );
};

export default MakeAdmin;