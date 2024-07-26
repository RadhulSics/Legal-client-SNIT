import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import img from '../../Assets/about_bg.jpg';

function BarCouncilDbarViewAdvocate() {
  return (
    <div>
    <div className='d-flex justify-content-center mt-5'>
        <div className='col'>
            <div className=' continer-fluid'>
                <p className='fs-2 view_all_advocate_text'>D-Bar Advocate</p>
                {/* <button
                    className="carousel-control control-caro prev mt-5"
                    onClick={prevPage}
                >
                    ‹
                </button> */}
                <div className='row'>

                    <div className='col-sm-3 '>
                        <div className="card card_bg ms-2" style={{ width: '15rem' }}>
                            <p className='text-center mt-3 card_hed_text'>Text-1</p>
                            <p className='text-center'>Text-2</p>
                            <img src={img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <p className='text-center'><Link to='/BarCouncil_view_d-baradvocate_details' className='text-decoration-underline text-dark'>View full details</Link></p>
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
                    <div className='col-sm-3'>
                        <div className="card card_bg" style={{ width: '15rem' }}>
                            <p className='text-center mt-3 card_hed_text'>Text-1</p>
                            <p className='text-center'>Text-2</p>
                            <img src={img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <p className='text-center'><Link to='/BarCouncil_view_d-baradvocate_details' className='text-decoration-underline text-dark'>View full details</Link></p>
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
                    <div className='col-sm-3'>
                        <div className="card card_bg " style={{ width: '15rem' }}>
                            <p className='text-center mt-3 card_hed_text'>Text-1</p>
                            <p className='text-center'>Text-2</p>
                            <img src={img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <p className='text-center'><Link to='/BarCouncil_view_d-baradvocate_details' className='text-decoration-underline text-dark'>View full details</Link></p>
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
                    <div className='col-sm-3'>
                        <div className="card card_bg " style={{ width: '15rem' }}>
                            <p className='text-center mt-3 card_hed_text'>Text-1</p>
                            <p className='text-center'>Text-2</p>
                            <img src={img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <p className='text-center'><Link to='/BarCouncil_view_d-baradvocate_details' className='text-decoration-underline text-dark'>View full details</Link></p>
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

                </div>
                {/* <button
                    className="carousel-control control-caro next mt-5 ms-5"
                    onClick={nextPage}
                >
                    ›
                </button> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default BarCouncilDbarViewAdvocate