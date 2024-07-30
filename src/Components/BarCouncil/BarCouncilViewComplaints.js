import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constants/BaseUrl';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function BarCouncilViewComplaints() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance
            .post("/viewAllComplaints")
            .then((res) => {

                if (res.data.status === 200) {
                    console.log(res);
                    setData(res.data.data || []);
                } else {
                    setData([]);
                }
            })
            .catch((error) => {
                console.log("Error!", error);
            });
    }, []);

    const handleDeactivate = (id) => {
        axiosInstance
          .post(`/deBarAdvocateById/${id}`)
          .then((res) => {
            console.log(res);
    
            if (res.data.status === 200) {
            //   setAdvocate((prevAdvocate) => ({
            //     ...prevAdvocate,
            //     debarred: true,
            //   }));
            toast.success('Debarred')
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col'>
                    <div className="container-fluid">
                        <p className='fs-3 text-center mb-5 fw-semibold'>Complaints</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>User Type</th>
                                    <th>Date</th>
                                    <th>Complaint</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.userId.name}</td>
                                            <td>{item.advId.name}</td>
                                            <td>{item.date.slice(0,10)}</td>
                                            <td>{item.complaint}</td>
                                            {/* <td><Link to={`/BarCouncil_view_details/${item.advId._id}/debar`}><button className='btn btn-danger' >Debar</button></Link> </td> */}
                                            <td><button className='btn btn-danger' onClick={()=>{handleDeactivate(item.advId._id)}} >Debar</button></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">No complaints found</td> 
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarCouncilViewComplaints;
