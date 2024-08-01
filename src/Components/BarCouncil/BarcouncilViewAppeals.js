import React, { useEffect, useState } from "react";
import axiosInstance from "../Constants/BaseUrl";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import noData from "../../Assets/noDataFound.json";
import "bootstrap/dist/css/bootstrap.min.css";

function BarcouncilViewAppeals() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAppeal, setCurrentAppeal] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    axiosInstance
      .post("/viewAllPendingAppeals")
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

  const handleActivate = (aid, advId) => {
    axiosInstance
      .post(`/removeDeBarAdvocateById/${advId}`, { appealId: aid })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success("Debar Cancelled");
          // Update the state to reflect the changes
          setData(prevData =>
            prevData.map(advocate =>
              advocate._id === aid ? { ...advocate, advId: { ...advocate.advId, debarred: false } } : advocate
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const handleReply = (appeal) => {
    setCurrentAppeal(appeal);
    setIsModalOpen(true);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/replyAppealsById/${currentAppeal}`, { reply: reply })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          toast.success("Reply sent successfully");
          setIsModalOpen(false);
          setReply("");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
        toast.error("Failed to send reply");
      });
  };

  return (
    <div className="main-div">
      {data.length !== 0 ? (
        <div className="table-container table-striped">
          <table className="table-change container-fluid">
            <thead>
              <tr>
                <th className="table-header">Advocate Name</th>
                <th className="table-header">Date of Appeal</th>
                <th className="table-header">Reason</th>
                <th className="table-header">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((advocate) => (
                  <tr key={advocate._id}>
                    <td className="table-data">{advocate.advId.name}</td>
                    <td className="table-data">
                      {advocate.createdAt.slice(0, 10)}
                    </td>
                    <td className="table-data">{advocate.reason}</td>
                    <td className="table-data">
                      {advocate.advId.debarred === true ? (
                        <>
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleActivate(advocate._id, advocate.advId._id)
                            }
                          >
                            Cancel Debar
                          </button>
                          {advocate.status === "Reviewed" ? (
                            ""
                          ) : (
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => handleReply(advocate._id)}
                            >
                              Reply
                            </button>
                          )}
                        </>
                      ) : (
                        <p className="text-success">Debar is cancelled</p>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Data obtained
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no_data_animation">
          <Lottie animationData={noData} className="no_data_animation" />
        </div>
      )}

      {isModalOpen && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reply to Appeal</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setIsModalOpen(false)}
                >
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarcouncilViewAppeals;
