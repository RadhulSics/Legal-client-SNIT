import React, { useState, useEffect } from 'react';
import axiosInstance from '../Constants/BaseUrl';
import { toast } from 'react-toastify';

function BarcouncilAddLegalPolicies() {
    const [policies, setPolicies] = useState({
        user: "",
        advocate: ""
    });

    useEffect(() => {
        axiosInstance
            .post(`/viewAllPolicy`)
            .then((response) => {
                console.log(response);
                setPolicies(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the advocate details!", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPolicies({
            ...policies,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(policies);
        axiosInstance
            .post(`/updatePolicyById`, policies)
            .then((response) => {
                toast.success("Policy updated successfully!");
                console.log(response);
            })
            .catch((error) => {
                toast.error("There was an error updating the policy.");
                console.error("There was an error updating the policy!", error);
            });
    };

    console.log(policies);

    return (
        <div>
            <div className="junior-heading-div container-fluid">
                {/* <label className='junior-reg-title'>Add Complaint</label> */}
            </div>
            <div className="payment-card-center">
                <div className="card card-style-change">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row row-position-adjust">
                                <div className="col-5">
                                    <p className="payment-name-style">User</p>
                                </div>
                                <div className="col-2">
                                    <div className="payment-name-style">:</div>
                                </div>
                                <div className="col-5">
                                    <textarea
                                        className="form-control border border-dark mb-2"
                                        name="user"
                                        value={policies.user}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-5">
                                    <p className="payment-name-style">Advocate</p>
                                </div>
                                <div className="col-2">
                                    <div className="payment-name-style">:</div>
                                </div>
                                <div className="col-5">
                                    <textarea
                                        className="form-control border border-dark mb-2"
                                        name="advocate"
                                        value={policies.advocate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12 text-center mt-3">
                                <button type="submit" className="btn bg-gold but-move">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BarcouncilAddLegalPolicies;
