import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../Constants/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";

function UserAddComplaints() {
  const [complaint, setComplaint] = useState("");
  const id = localStorage.getItem("userId");
  const { aid } = useParams();
  const navigate = useNavigate();

  console.log(aid);

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleAddComplaint = (event) => {
    event.preventDefault();

    axiosInstance
      .post(`/addComplaint`, { complaint: complaint, userId: id, advId: aid })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigate(-1);
          toast.success("Complaint Added");
        } else {
          toast.error("Failed ");
        }
      })
      .catch(() => {
        toast.error("Failed to Add Case");
      });
    setComplaint("");
  };

  return (
    <div>
      <div className="junior-heading-div container-fluid">
        {/* <label className='junior-reg-title'>Add Complaint</label> */}
      </div>
      <div className="payment-card-center">
        <div className="card card-style-change">
          <form onSubmit={handleAddComplaint}>
            <div className="card-body">
              <div className="row row-position-adjust">
                <div className="col-5">
                  <p className="payment-name-style">Complaints</p>
                </div>
                <div className="col-2">
                  <div className="payment-name-style">:</div>
                </div>
                <div className="col-5">
                  <textarea
                    className="form-control border border-dark mb-2"
                    name="complaint"
                    value={complaint}
                    onChange={handleComplaintChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 text-center mt-3">
                <button type="submit" className="btn bg-gold but-move">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAddComplaints;
