import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constants/BaseUrl';
import Lottie from "lottie-react";
import noData from "../../Assets/noDataFound.json";

function AdvocateViewAppeals() {

    const [data, setData] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [currentAppeal, setCurrentAppeal] = useState(null);
    // const [reply, setReply] = useState("");

    const id=localStorage.getItem('advocateId') 

    useEffect(() => {
        axiosInstance
            .post(`/viewAppealsByAdvId/${id}`)
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    setData(res.data.data || []);
                } else {
                    setData([]);
                }
            })
            .catch((error) => {
                console.log("Error fetching advocate:", error);
            });
    }, []);

  

  return (
    <div className="main-div">
            {data.length !== 0 ? (
                <div className="table-container table-striped">
                    <table className="table-change container-fluid">
                        <thead>
                            <tr>
                                <th className="table-header">Date of Appeal</th>
                                <th className="table-header">Reason</th>
                                <th className="table-header">Reply</th>
                                <th className="table-header">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length ? (
                                data.map((advocate) => (
                                    <tr key={advocate._id}>
                                        {/* <td className="table-data">{advocate.advId.name}</td> */}
                                        <td className="table-data">{advocate.createdAt.slice(0, 10)}</td>
                                        <td className="table-data">{advocate.reason}</td>
                                        <td className="table-data">{advocate.reply?advocate.reply:'-'}</td>
                                        <td className="table-data">
                                            {advocate.appealStatus=='open'?'Pending':advocate.appealStatus}
                                        </td>
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
                    <Lottie animationData={noData} className="no_data_animation" />
                </div>
            )}

            {/* {isModalOpen && (
                <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Reply to Appeal</h5>
                                <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmitReply}>
                                    <div className="form-group">
                                        <label htmlFor="reply">Reply:</label>
                                        <textarea
                                            id="reply"
                                            className="form-control"
                                            value={reply}
                                            onChange={handleReplyChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
  )
}

export default AdvocateViewAppeals
