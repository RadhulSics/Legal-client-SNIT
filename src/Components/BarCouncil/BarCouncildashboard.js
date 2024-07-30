import React, { useEffect, useState } from 'react'
import '../BarCouncil/BarCouncildashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import axiosMultipartInstance from '../Constants/FormDataUrl';
import axiosInstance from '../Constants/BaseUrl';
function BarCouncildashboard() {

    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("barcouncilId" == null)) {
        navigate("/");
      }
    });

    const [advocates, setAdvocate] = useState([]);
    const [appeal, setAppeal] = useState([]);
    const [cases, setCases] = useState([]);


    useEffect(() => {
        axiosMultipartInstance
          .post("/viewAdvocates")
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              setAdvocate(res.data.data || []);
            } else {
              setAdvocate([]);
            }
          })
          .catch((error) => {
            console.log("Error fetching advocate:", error);
          });
      }, []);

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

    useEffect(() => {
        axiosInstance
            .post("/viewAllPendingAppeals")
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    setAppeal(res.data.data || []);
                } else {
                    setAppeal([]);
                }
            })
            .catch((error) => {
                console.log("Error fetching advocate:", error);
            });
    }, []);

    useEffect(() => {
        axiosInstance
          .post("/getAllCases")
          .then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              setCases(res.data.data || []);
            } else {
                setCases([]);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      }, []);

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='col-11  shadow-lg rounded-4'>
                    <div className=' p-3'>
                        <p className='d-flex justify-content-start fs-3 '>Dashboard</p>
                        <div className='row justify-content-evenly'>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Advocates</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Active</p>
                                    <p className='barcouncil_dashboard_bg_text'>{advocates.length}</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Complaints</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Active</p>
                                    <p className='barcouncil_dashboard_bg_text'>{data.length}</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Appeals</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Active</p>
                                    <p className='barcouncil_dashboard_bg_text'>{appeal.length}</p>
                                </div>
                            </div>
                            <div className='col-sm-3 barcouncil_dashboard_bg border rounded-3 shadow-sm '>
                                <p className='barcouncil_dashboard_bg_text fs-4 mt-3'>Cases</p>
                                <div className='d-flex justify-content-between mt-5'>
                                    <p className='barcouncil_dashboard_bg_text'>Active</p>
                                    <p className='barcouncil_dashboard_bg_text'>{cases.length}</p>
                                </div>
                            </div>
                        </div>
{/*                         
                        <div className="main-div">

        {cases.length !== 0 ? (
          <div className="table-container table-striped">
            <table className="table-change container-fluid">
              <thead>
                <tr>
                  <th className="table-header">Case Title</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Date Of Incident</th>
                  <th className="table-header">User Name</th>
                  <th className="table-header">Advocate Name</th>
                </tr>
              </thead>
              <tbody>
                {cases.length ? (
                  cases.map((advocate) => (
                    <tr>
                      <td className="table-data">{advocate.title}</td>
                      <td className="table-data">{advocate.type}</td>
                      <td className="table-data">{advocate.dateOfIncident.slice(0,10)}</td>
                      <td className="table-data">{advocate.userId.name}</td>
                      <td className="table-data">{advocate.advocateStatus==true?advocate.advocateId.name:'-'}</td>
                      <td className="table-data">
                        <Link to={`/BarCouncil_view_detils/${advocate._id}`}>
                          <button className="btn btn-outline-secondary">
                            Details
                          </button>
                        </Link>
                      </td>{" "}
                      
                    </tr>
                  ))
                ) : (
                  <h1>No Data obtained</h1>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no_data_animation">
            
          </div>
        )}
        
      </div> */}
                    </div>
                </div>
            </div>
            {/*Bottom space */}
            <p className='invisible'>rr</p>
        </div>

    )
}

export default BarCouncildashboard