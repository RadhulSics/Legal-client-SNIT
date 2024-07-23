import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';

function BarCouncilViewComplaints() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axiosInstance
        .post("/viewAllComplaints")
        .then((res)=>{
            if(res.data.status === 200){
                console.log(res);
                setData(res.data.data || []);
            }else{
                setData([]);
            }
        })
        .catch((error)=>{
            console.log("Error!",error);
        });
    },[]);
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col '>
                    <div className="container-fluid">
                        <div className="row ">
                        <p className='fs-3 text-center mb-5 fw-semibold'>Complaints</p>
                            <div className="col-lg-3 col-sm-3">
                                <div className="card shadow-sm" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-5'><p>User Name</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>abcde`</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>User Type</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>  Client</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Date</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>2024-07-08</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Complaint</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>There is delay in response</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="card shadow-sm" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-5'><p>User Name</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>abcde`</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>User Type</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>  Client</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Date</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>2024-07-08</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Complaint</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>There is delay in response</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="card shadow-sm" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-5'><p>User Name</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>abcde`</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>User Type</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>  Client</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Date</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>2024-07-08</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Complaint</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>There is delay in response</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="card shadow-sm" style={{ width: '16rem' }}>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-5'><p>User Name</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>abcde`</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>User Type</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>  Client</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Date</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>2024-07-08</p></div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-5'><p>Complaint</p></div>
                                            <div className='col-2'>:</div>
                                            <div className='col-5'><p>There is delay in response</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarCouncilViewComplaints