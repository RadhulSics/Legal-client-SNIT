import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/about_bg.jpg';

function BarCouncilDbarViewAdocateDetails() {
  return (
    <div>
         <p className='fs-4 text-center mt-5'>D-bar Advocate Details</p>
            <div className='d-flex justify-content-center'>
                <div className="container mt-5">
                    <div className="row">
                        <div class="col-sm-6 col-lg-6 text-center">
                            <img className='img-fluid details_img' src={img} />
                            <p className='user_text_name'>name</p>
                            <p className='user_text_law_type'>Criminal Law</p>
                            <p className='user_text_law_year_exp'>2 Years of Experience in Various Cases</p>
                            <p><Link to='#'  class="modeal_text" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                View Id Proof
                            </Link></p>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="table-responsive">
                                <table className="table ju-custom-table">
                                    <tbody>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">No of Case Attended</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.bcNo} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Bar Council Enrollment Number</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.bcNo} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Date of Enrollment</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.dateOfEnrollment} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">State Bar Council</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.bcState} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Specialization Areas</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.specialization} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Educational Qualification</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.qualification} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Gender</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.gender} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Email Address</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.email} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Contact Number</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.contact} */}
                                            </label></td>
                                        </tr>
                                        <tr>
                                            <td className='left-alignn'><label className="ju-sub-label">Nationality</label></td>
                                            <td className='left-alignn'>:</td>
                                            <td className='left-alignn'><label className="ju-sub-label">
                                                {/* {advocate.nationality} */}
                                            </label></td>
                                        </tr>
                                    </tbody>
                                </table >
                            </div>
                        </div>
                    </div>
                    {/*Modal*/}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End of modal */}
                </div>
            </div>
    </div>
  )
}

export default BarCouncilDbarViewAdocateDetails