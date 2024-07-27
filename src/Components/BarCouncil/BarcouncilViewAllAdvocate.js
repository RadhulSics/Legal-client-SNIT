import React, { useEffect, useState } from "react";
import "../BarCouncil/BarcouncilviewAllAdvocate.css";
import img from "../../Assets/about_bg.jpg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axiosMultipartInstance from "../Constants/FormDataUrl";
import { imageUrl } from "../Constants/Image_Url";

function BarcouncilViewAllAdvocate() {
  const [currentPage, setCurrentPage] = useState(0);
  const [advocates, setAdvocate] = useState([]);
  const advocatesPerPage = 4;

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

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? advocates.length - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === advocates.length - 1 ? 0 : prevPage + 1
    );
  };

  const currentAdvocates = advocates.slice(
    currentPage,
    currentPage + advocatesPerPage
  );
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="col">
          <div className=" continer-fluid">
            <p className="fs-2 view_all_advocate_text">All Advocate</p>
            <button
              className="carousel-control control-caro prev mt-5"
              onClick={prevPage}
            >
              ‹
            </button>
            <div className="row">
              {advocates.length
                ? advocates.map((advocates) => {
                    return (
                      <div className="col-sm-3 ">
                        <div
                          className="card card_bg ms-2"
                          style={{ width: "15rem" }}
                        >
                          <p className="text-center mt-3 card_hed_text">
                          {advocates.name}
                          </p>
                          <p className="text-center">{advocates.specialization}</p>
                          <img
                            src={`${imageUrl}/${advocates.profilePic.filename}`}
                            alt={advocates.name}
                            className="image-fluid image-style"
                          />
                          <div class="card-body">
                            <p className="text-center">
                              <Link
                                to={`/BarCouncil_view_details/${advocates._id}`}
                                className="text-decoration-underline text-dark"
                              >
                                View full details
                              </Link>
                            </p>
                            <div className="d-flex justify-content-center pb-2">
                              <ReactStars
                                count={5}
                                value={advocates.rating ? advocates.rating : 0}
                                size={24}
                                activeColor="#F1B31C"
                                edit={false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}

              {/* <div className="col-sm-3">
                <div className="card card_bg" style={{ width: "15rem" }}>
                  <p className="text-center mt-3 card_hed_text">Text-1</p>
                  <p className="text-center">Text-2</p>
                  <img src={img} className="card-img-top" alt="..." />
                  <div class="card-body">
                    <p className="text-center">
                      <Link
                        to="/BarCouncil_view_details"
                        className="text-decoration-underline text-dark"
                      >
                        View full details
                      </Link>
                    </p>
                    <div className="d-flex justify-content-center pb-2">
                      <ReactStars
                        count={5}
                        // value={advocate.rating ? advocate.rating : 0}
                        size={24}
                        activeColor="#F1B31C"
                        edit={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card_bg " style={{ width: "15rem" }}>
                  <p className="text-center mt-3 card_hed_text">Text-1</p>
                  <p className="text-center">Text-2</p>
                  <img src={img} className="card-img-top" alt="..." />
                  <div class="card-body">
                    <p className="text-center">
                      <Link
                        to="/BarCouncil_view_details"
                        className="text-decoration-underline text-dark"
                      >
                        View full details
                      </Link>
                    </p>
                    <div className="d-flex justify-content-center pb-2">
                      <ReactStars
                        count={5}
                        // value={advocate.rating ? advocate.rating : 0}
                        size={24}
                        activeColor="#F1B31C"
                        edit={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card card_bg " style={{ width: "15rem" }}>
                  <p className="text-center mt-3 card_hed_text">Text-1</p>
                  <p className="text-center">Text-2</p>
                  <img src={img} className="card-img-top" alt="..." />
                  <div class="card-body">
                    <p className="text-center">
                      <Link
                        to="/BarCouncil_view_details"
                        className="text-decoration-underline text-dark"
                      >
                        View full details
                      </Link>
                    </p>
                    <div className="d-flex justify-content-center pb-2">
                      <ReactStars
                        count={5}
                        // value={advocate.rating ? advocate.rating : 0}
                        size={24}
                        activeColor="#F1B31C"
                        edit={false}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <button
              className="carousel-control control-caro next mt-5 ms-5"
              onClick={nextPage}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarcouncilViewAllAdvocate;
