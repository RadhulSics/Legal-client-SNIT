import React, { useEffect, useState } from 'react'
import '../BarCouncil/BarCouncilViewDetails.css'
import img from '../../Assets/about_bg.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BarCouncilSidebar from './BarCouncilSidebar';
import axiosInstance from '../Constants/BaseUrl';
import { imageUrl } from '../Constants/Image_Url';

function BarCouncilViewDetails() {

    const [advocate, setAdvocate] = useState(null);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id,type } = useParams();

  useEffect(() => {
    axiosInstance
      .post(`/viewAdvocateById/${id}`)
      .then((response) => {
        setAdvocate(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the advocate details!", error);
      });
  }, [id]);

  const handleActivate = (id) => {
    axiosInstance
      .post(`/removeDeBarAdvocateById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setAdvocate((prevAdvocate) => ({
            ...prevAdvocate,
            debarred: false,
          }));
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const handleDeactivate = (id) => {
    axiosInstance
      .post(`/deBarAdvocateById/${id}`)
      .then((res) => {
        console.log(res);

        if (res.data.status === 200) {
          setAdvocate((prevAdvocate) => ({
            ...prevAdvocate,
            debarred: true,
          }));
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const toggleModal = () => setShowModal(!showModal);

  if (!advocate) {
    return "";
  }

    return (
        <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="admin_view_advocate_img col-lg-4 col-md-6 col-sm-12 text-center">
          <img src={`${imageUrl}/${advocate.profilePic.filename}`} className="img-fluid rounded" alt="Advocate" />
          <br />
          <label className="advocate-name d-block mt-3">{advocate.name}</label>
          <label className="practice-area d-block">Practice Area</label>
          <label className="experience-label d-block">
            {advocate.experience} Years of Experience in Various Cases
          </label>
          <br />
          {/* <Link className="link-label" to="#!" onClick={toggleModal}>
            View Id Proof
          </Link> */}
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 ">
          <div>
            <table className="table custom-table">
              <tbody>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">Bar Council Enrollment Number </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.bcNo}</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">Date of Enrollment </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.dateOfEnrollment}</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">State Bar Council </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.bcState}</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">Specialization Areas </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.specialization}</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">Years of Experience </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.experience} years</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-alignn">
                    <label className="sub-label">Educational Qualification </label>
                  </td>
                  <td className="left-alignn"> : </td>
                  <td className="left-alignn">
                    <label className="sub-label">{advocate.qualification}</label>
                  </td>
                </tr>
                 
                 {/* {type=='debar'?
                 <div className="row justify-content-center mt-4 arr">
                    <div className="col-auto">
                      {advocate.debarred==false ? (
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDeactivate(advocate._id)}
                        >
                          Debar Now
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-success "
                          onClick={() => handleActivate(advocate._id)}
                        >
                          Cancel Debar
                        </button>
                      )}
                    </div>
                  </div>:''
                } */}

                  
                
            
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ID Proof</h5>
              <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={`${imageUrl}/${advocate.idProof.filename}`} className="img-fluid" alt="ID Proof" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showModal && <div className="modal-backdrop fade show" />}
    </div>
    )
}

export default BarCouncilViewDetails